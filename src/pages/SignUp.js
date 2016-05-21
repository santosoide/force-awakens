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

class SignUp extends Component {
    render() {
        return (
            <div>
                <div className="ui grid">
                    <div className="three column row">
                        <div className="column"></div>
                        <div className="column ui segment" style={s.margin}>
                            <h3 style={s.center}>Sign Up Form</h3>
                            <form className="ui form">
                                <div className="field">
                                    <label>Name</label>
                                    <input type="text" name="name" placeholder="Email"/>
                                </div>
                                <div className="field">
                                    <label>Email</label>
                                    <input type="email" name="email" placeholder="Email"/>
                                </div>
                                <div className="field">
                                    <label>Password</label>
                                    <input type="password" name="password" placeholder="Password"/>
                                </div>
                                <div className="field">
                                    <label>Password Confirmation</label>
                                    <input type="password" name="password_confirmation"
                                           placeholder="Password Confirmation"/>
                                </div>
                                <div className="field">
                                    <div className="ui checkbox">
                                        <input type="checkbox" tabIndex="0" className="hidden"/>
                                        <label>I agree to the Terms and Conditions</label>
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


export default SignUp;