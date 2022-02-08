import * as React from 'react';
import * as ReactDOM from 'react-dom';

const loader = () => {
    return <div>
        <h1>AUTOMATE</h1>
        <h3 class="span loader-message">
            <span class='m'>A</span>
            <span class='m'>&nbsp;</span>
            <span class='m'>N</span>
            <span class='m'>E</span>
            <span class='m'>W</span>
            <span class='m'>&nbsp;</span>
            <span class='m'>H</span>
            <span class='m'>O</span>
            <span class='m'>P</span>
            <span class='m'>E</span>
            <span class='m'>&nbsp;</span>
            <span class='m'>F</span>
            <span class='m'>O</span>
            <span class='m'>R</span>
            <span class='m'>&nbsp;</span>
            <span class='m'>S</span>
            <span class='m'>O</span>
            <span class='m'>R</span>
            <span class='m'>C</span>
            <span class='m'>E</span>
            <span class='m'>&nbsp;</span>
            <span class='m'>C</span>
            <span class='m'>O</span>
            <span class='m'>N</span>
            <span class='m'>T</span>
            <span class='m'>R</span>
            <span class='m'>O</span>
            <span class='m'>L</span>
        </h3>
        <i id="loading-message" class="loading-message">Loading <span id="loading-task">configurations</span>, please wait...</i>
        <i class="user-welcome">Welcome, <span id="username">nameless patron</span>!</i>
    </div>;
};

ReactDOM.render(<loader />, document.getElementById('loader'));