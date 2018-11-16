import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import zcash from '../img/zcash-icon-white1.png';
import bars from '../img/bars1.png';
import message from '../img/indicator-messages1.png';

class Footer extends Component {
    render() {
        return (
            <div id="footer-content">
                <div className="under-menu">
                    <Link to="#">
                        <img src={bars} />
                    </Link>
                    <Link to="#">
                        <img src={zcash} />
                    </Link>
                </div>
                <div className="under-content">
                    <Link to="#">
                        <img src={message} />
                    </Link>
                </div>
            </div>
        );
    }
}

export default Footer;
