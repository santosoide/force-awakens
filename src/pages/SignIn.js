import React, { Component } from 'react';
import {Link} from 'react-router';

const s = {
    margin: {
        marginTop: '60px'
    },
    center: {
        textAlign: 'center',
        marginTop: '10px',
        marginBottom: '20px'
    }
};

class SignIn extends Component {
    render() {
        return (
            <div>
                <div className="ui grid">
                    <div className="three column row">
                        <div className="column"></div>
                        <div className="column ui segment" style={s.margin}>
                            <h3 style={s.center}>Please SignIn</h3>
                            <form className="ui form">
                                <div className="field">
                                    <label>Email</label>
                                    <input type="email" name="email" placeholder="Email"/>
                                </div>
                                <div className="field">
                                    <label>Password</label>
                                    <input type="password" name="password" placeholder="Password"/>
                                </div>
                                <div className="field">
                                    <div className="ui checkbox">
                                        <input type="checkbox" tabIndex="0"/>
                                        <label>Remember me</label>
                                    </div>
                                </div>
                                <button className="ui primary button" type="button">Submit</button>
                                <Link className="ui button" to="/">Cancel</Link>
                            </form>
                        </div>
                        <div className="column"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;