import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';

class App extends Component {
    constructor(props) {
        super(props);

        this.renderIndexPage = this.renderIndexPage.bind(this);
        this.renderAppContainer = this.renderAppContainer.bind(this);
    }

    renderIndexPage() {
        return (
            <Redirect
                to={getRedirectAfterSignInPath(authUser.get('userType'))}
                push={true}
            />
        );
    }

    renderAppContainer() {
        return (
            <div className="app-container">
                <div className="main-content">
                    <Route path="/" component={Header} />
                    <div className="content">
                        
                    </div>
                    <Route path="/" component={Footer} />
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="root-container">
                <Switch>
                    <Route path="/" render={this.renderAppContainer} />
                </Switch>
            </div>
        );
    }
}

export default App;