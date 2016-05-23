import React ,{Component}from 'react';
import {Link} from 'react-router';

const Navbar = () => {
    return (
        <div className="ui pointing menu large">
            <Link property="Home" to="/" activeClassName="active" className="item">Home</Link>
            <div className="right menu">
                <div className="item">
                    <Link property="home" to="/signin" className="ui button">Log-in</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;