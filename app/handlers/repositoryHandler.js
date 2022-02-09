const fs = require('fs');
const path = require('path');
const revents = require('events');
const eventEmitter = new revents.EventEmitter();
const gitParser = require(`../parsers/gitParser.js`);
const configHandler = require(`./configHandler`);
configHandler.initialize();
function initialize(module) { module.repositories = []; }
function importRepository(module, repository) {
    module.events.emit('repositoryImporting', repository.displayName)

    // Get the path to the repository.
    let filepath = undefined;
    if (repository.path.indexOf(':/') > 0)
        filepath = repository.path;
    else
        filepath = 'C:/Users/' + configHandler.username + '/source/' + repository.path + '/.git';

    // Load the git config file and parse it.
    loadConfigFile(module, repository, filepath);
}
function loadConfigFile(module, repository, filepath) {
    try {
        let relativePath = path.relative(process.cwd(), filepath);
        let data = fs.readFileSync(relativePath + '/config');
        try {
            let parsedRepository = gitParser.parse(data.toString());
            registerRepository(module, repository, parsedRepository);
        } catch (addException) {
            console.error('repository handler: ' + addException);
        }
    } catch (exception) {
        console.error('repository handler: ' + exception);
    }
}
function registerRepository(module, repository, repositoryData) {
    try {
        if (repositoryData) {
            repositoryData.name = repository.displayName;
            module.repositories.push(repositoryData);
            module.events.emit('repositoryImported', repositoryData);
            console.log('repository handler: Loaded repository `' + repositoryData.name + '`.');
        } else
            console.warn('repository handler: Repository `' + repository.displayName + '` undefined.');
    } catch (exception) {
        console.error('repository handler: ' + exception);
    }
}
module.exports = {
    events: eventEmitter,
    repositories: undefined,
    import: function () {
        initialize(this);
        let repos = configHandler.flux.directories.repositories;

        // Import global repositories first.
        importRepository(this, repos.apiCollections);
        importRepository(this, repos.applications);
        importRepository(this, repos.configurations);
        importRepository(this, repos.data);

        // Import development repositories.
        for (let repo of repos.development)
            importRepository(this, repo);

        // Import production repositories.
        for (let repo of repos.production)
            importRepository(this, repo);

        this.events.emit('importComplete', this.repositories);
    }
};