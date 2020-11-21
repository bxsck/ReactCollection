import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Book
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    Home
                </Link>
                <Link to="/rules" className="item">
                    Rules
                </Link>
                <GoogleAuth/>
            </div>
        </div>
    );
};

export default Header;