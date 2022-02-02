class Toast {
    imageUrl = undefined;
    imageAlt = undefined;
    autoDestroyIn = undefined;
    constructor(title, message) {
        this.title = title;
        this.message = message;
        this.timestamp = new Date();
    }
    appendTo(element) {
        let document = element.ownerDocument;
        let toast = document.createElement('div');
        toast.classList.add('toast');
        toast.setAttribute('role', 'alert');
        toast.setAttribute('aria-live', 'assertive');
        toast.setAttribute('aria-atomic', 'true');

        let toastHeader = document.createElement('div');
        toastHeader.classList.add('toast-header');

        // Append an image if one was specified.
        if (this.imageUrl) {
            let image = document.createElement('img');
            image.classList.add('rounded me-2');
            image.setAttribute('src', imageUrl);

            if (imageAlt)
                image.setAttribute('alt', imageAlt);

            toastHeader.appendChild(image);
        }

        // Append the toast title.
        let title = document.createElement('strong');
        title.classList.add('me-auto');
        title.innerText = this.title;
        toastHeader.appendChild(title);

        // Append the timestamp if one was provided.
        if (this.timestamp) {
            let timestamp = document.createElement('small');
            timestamp.classList.add('text-muted');
            timestamp.innerText = timestamp; // TODO: Parse the timestamp into a "how long ago" message (e.g. 2 minutes ago).
            toastHeader.appendChild(timestamp);
        }

        // Append the close button.
        let closeButton = document.createElement('button');
        closeButton.classList.add('btn-close');
        closeButton.setAttribute('type', 'button');
        closeButton.setAttribute('data-bs-dismiss', 'toast');
        closeButton.setAttribute('aria-label', 'Close');
        toastHeader.appendChild(closeButton);

        // Create the toast body.
        let toastBody = document.createElement('div');
        toastBody.classList.add('toast-body');
        toastBody.innerText = this.message;

        // Append the header and body to the toast, then append the toast to the specified element.
        toast.appendChild(toastHeader);
        toast.appendChild(toastBody);
        element.appendChild(toast);

        // Return the appended element.
        return toast;
    }
}
module.exports = Toast