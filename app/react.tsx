import * as React from 'react';
import * as ReactDOM from 'react-dom';

const message = "A NEW HOPE FOR SOURCE CONTROL";
const Loader = () => {
    let messageElements = [];
    for (let i = 0; i < message.length; i++) {
        let character = message.charAt(i);
        messageElements.push(<span className="m">{character}</span>)
    }

    return <div>
        <h1>AUTOMATE</h1>
        <h3 className="span loader-message">{messageElements}</h3>
        <i id="loading-message" className="loading-message">Loading <span id="loading-task">configurations</span>, please wait...</i>
        <i className="user-welcome">Welcome, <span id="username">nameless patron</span>!</i>
    </div>;
}
ReactDOM.render(<Loader />, document.getElementById('loader'));