const { Notification } = require('electron')

export function showNotification (title, body) {
    new Notification({ title: title, body: body }).show() 
  }