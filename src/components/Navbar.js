import React ,{Component}from 'react';
import {Link} from 'react-router';

const Navbar = () => {
    return (
        <div className="ui pointing menu large">
            <Link property="Home" to="/" activeClassName="active" className="item">Home</Link>
            <Link property="People" to="/people" activeClassName="active" className="item">People</Link>
            <Link property="Planets" to="/planets" activeClassName="active" className="item">Planets</Link>
            <Link property="Starships" to="/starships" activeClassName="active" className="item">Star hips</Link>
            <div className="item">
                <div className="ui transparent icon input">
                    <input type="text" placeholder="Search..."/>
                    <i className="search link icon"></i>
                </div>
            </div>
            <div className="right menu">
                <div className="item">
                    <Link property="home" to="/signup" className="ui primary button">Sign up</Link>
                </div>
                <div className="item">
                    <Link property="home" to="/signin" className="ui button">Log-in</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;