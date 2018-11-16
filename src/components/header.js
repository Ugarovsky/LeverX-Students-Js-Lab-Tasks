import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div id="header-content">
                <div className="over-menu"><i className="fas fa-chevron-left"></i>       
                    <p id="order-count"></p>
                </div>
                <div className="over-content">

                </div>
            </div>
        );
    }
}

export default Header;
