function parseTag(data) {
    let lineData = data.split('"')
    let key = lineData[0].replace('[').trim();
    let name = lineData[1].replace('"]', '').trim();
    return { key: key, name: name };
}
function parseKeyValuePair(data) {
    let pairing = data.split(' = ');
    return { key: pairing[0].replace('\t', ''), value: pairing[1] };
}
function parseSection(section) {
    let sectionData = section.split('\n');
    let type = undefined;
    let name = undefined;
    let keyValuePairs = [];
    for (let line of sectionData) {

        // The header is distinct with a pattern of `[header "optionalData"]`.
        if (line.indexOf(']') >= 0 && line.indexOf('"') >= 0) {
            let tag = parseTag(line);

            // Process the tag key before continuing.
            switch (tag.key) {
                case 'remote': case 'branch': break;
                default: console.log('git parser: The tag key `' + tag.key + '` is not supported.'); return;
            }

            type = tag.key;
            name = tag.name;
        }

        // Data in each section follows the pattern `key = value`.
        else if (line.indexOf('=') >= 0) {
            let keyValuePair = parseKeyValuePair(line);
            keyValuePairs.push(keyValuePair);
        }
    }

    return { type: type, name: name, data: keyValuePairs };
}
function createRemote(remote) {
    return {
        name: remote.name,
        url: remote.data[0].value,
        fetch: remote.data[1].value
    }
}
function createBranch(branch) {
    return {
        name: branch.name,
        remote: branch.data[0].value,
        merge: branch.data[1].value
    }
}
module.exports = {
    parse: function (data) {
        // Create an empty data model to return data with.
        let result = {
            remotes: [],
            branches: []
        }

        // Section headers are wrapped with square brackets (e.g. `[header]`).
        let sections = data.split('[');
        for (let section of sections) {
            sectionData = parseSection(section);
            if (sectionData && sectionData.type)
            switch (sectionData.type) {
                case 'remote': result.remotes.push(createRemote(sectionData)); break;
                case 'branch': result.branches.push(createBranch(sectionData)); break;
            }
        }

        return result;
    }
}