const { app, BrowserWindow } = require('electron');
const path = require('path');
const configHandler = require('../app/handlers/configHandler.js');
const taskbarProgressBar = require('./scripts/utilities')
configHandler.initialize();
function createWindow () {
  let windowConfig = {
    show: false,
    width: configHandler.settings.window.startup.width,
    height: configHandler.settings.window.startup.height,
    webPreferences: {
      preload: "../app/preload.js"
    }
  };
  const mainWindow = new BrowserWindow(windowConfig);
  if (configHandler.settings.window.startup.maximized)
    mainWindow.maximize();

  mainWindow.loadFile('index.html');
  mainWindow.show();

  let progress = 0
  const progressInterval = setInterval(() => {
    progress += .02

    mainWindow.setProgressBar(.5)
  }, 120)
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0)
        createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin')
    app.quit();
});