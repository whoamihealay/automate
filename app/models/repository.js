class Repository {
    constructor(name, filepath) {
        this.name = name;
        this.filepath = filepath;
        this.branches = [];
        this.remotes = [];
    }
    addBranch(branchName) { this.branches.push(branchName); }
    addRemote(name, url) { this.remotes.push({ name: name, url: url }); }
}