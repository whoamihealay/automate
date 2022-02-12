export function taskbarProgressBar (window, setProgress) {
  let progress = setProgress ? setProgress : 0

  const progressInterval = setInterval(() => {
    if (!setProgress) {
      progress += 0.2
    }
    if (progress >= 1) {
      window.setProgressBar(-1)
      clearInterval(progressInterval)
    }
    window.setProgressBar(progress)  
  }, 120)
}

const { Notification } = require('electron')

export function showNotification (title, body) {
    new Notification({ title: title, body: body }).show() 
  }