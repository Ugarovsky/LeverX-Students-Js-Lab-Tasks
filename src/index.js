import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Router, Route } from 'react-router-dom';

import history from './tools/history';

import App from './app';
require('./index.css');

class Main extends Component {
    render() {
        return (
            <Router history={history}>
                <Route path="/" component={App} />
            </Router>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));
