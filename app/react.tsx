import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Loader = () => {
    return <div>
        <h1>AUTOMATE</h1>
        <h3 className="span loader-message">
            <span className='m'>A</span>
            <span className='m'>&nbsp;</span>
            <span className='m'>N</span>
            <span className='m'>E</span>
            <span className='m'>W</span>
            <span className='m'>&nbsp;</span>
            <span className='m'>H</span>
            <span className='m'>O</span>
            <span className='m'>P</span>
            <span className='m'>E</span>
            <span className='m'>&nbsp;</span>
            <span className='m'>F</span>
            <span className='m'>O</span>
            <span className='m'>R</span>
            <span className='m'>&nbsp;</span>
            <span className='m'>S</span>
            <span className='m'>O</span>
            <span className='m'>R</span>
            <span className='m'>C</span>
            <span className='m'>E</span>
            <span className='m'>&nbsp;</span>
            <span className='m'>C</span>
            <span className='m'>O</span>
            <span className='m'>N</span>
            <span className='m'>T</span>
            <span className='m'>R</span>
            <span className='m'>O</span>
            <span className='m'>L</span>
        </h3>
        <i id="loading-message" className="loading-message">Loading <span id="loading-task">configurations</span>, please wait...</i>
        <i className="user-welcome">Welcome, <span id="username">nameless patron</span>!</i>
    </div>;
};

ReactDOM.render(<Loader />, document.getElementById('loader'));