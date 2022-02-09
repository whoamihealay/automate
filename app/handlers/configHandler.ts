const os = require('os');
module.exports = {
    username: os.userInfo().username,
    data: require(`../../configurations/config.json`),
    flux: undefined,
    initialize: function () {
        let flux = require(`../../configurations/flux.json`);
        try {
            flux = require(`../../configurations/flux.dev.json`);
        } catch { console.warn("Unable to load a deviated flux configuration. Starting with standardized values."); }

        this.flux = flux;
    }
};