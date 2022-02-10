const os = require('os');
module.exports = {
    username: os.userInfo().username,
    data: undefined,
    secrets: require(`../../configurations/secrets.dev.json`),
    initialize: function () {
        let settings = require(`../../configurations/settings.json`);
        try {
            settings = require(`../../configurations/settings.dev.json`);
        } catch { console.warn("Unable to load a deviated configuration. Starting with standardized values."); }

        this.data = settings;
    }
};