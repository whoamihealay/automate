const Toast = require('./models/bootstrap/toast');
const repositoryHandler = require(`./handlers/repositoryHandler.js`);
var loadingTaskElement = undefined;
var toastContainerElement = undefined;
function setTaskMessage(task) { loadingTaskElement.innerText = task; }
function repositoryImported(repository) {
    // Not sure this is needed, leaving for now.
}
function importComplete(repositories) {
    let message = 'Successfully imported ' + repositories.length + ' repositories.';
    let toast = new Toast('Import Complete', message);
    let toastElement = toast.appendTo(toastContainerElement);
    toastElement.classList.add('show');
    setTimeout(function () {
        toastElement.remove();
    }, 5000);

    document.getElementById('loading-message').innerHTML = 'Welcome to your automated source control experience!'
    setTimeout(function () {
        // Change to repository page.
    }, 5000);
}
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        loadingTaskElement = document.getElementById('loading-task');
        toastContainerElement = document.getElementById('toast-container');
        document.getElementById('username').innerText = configHandler.username;

        // Import repositories.
        repositoryHandler.events.on('repositoryImporting', (repositoryName) => setTaskMessage('repository `' + repositoryName + '`'));
        repositoryHandler.events.on('repositoryImported', repositoryImported);
        repositoryHandler.events.on('importComplete', importComplete);
        repositoryHandler.import();
    }, 3000);
});