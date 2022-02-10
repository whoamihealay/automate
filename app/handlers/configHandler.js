const { app } = require('electron');
const os = require('os');
module.exports = {
    username: os.userInfo().username,
    settings: undefined,
    secrets: require(`../../configurations/secrets.dev.json`),
    initialize: function () {
        let data = require(`../../configurations/settings.json`);

        // Only attempt to load deviations in development.
        if (!app.isPackaged) {
            try {
                data = require(`../../configurations/settings.dev.json`);
            } catch { console.warn("Unable to load a deviated configuration. Starting with standardized values."); }
        }

        this.settings = data;
    }
};