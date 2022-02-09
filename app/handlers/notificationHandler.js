module.exports = {
    notify: function(title, message) {
        new Notification(title, { body: message });
    }
}