import React, { Component } from 'react';
import {Link} from 'react-router';

class NotFound extends Component {
    render() {
        return (
            <div>
                <div className="ui segment">
                    <div className="ui red message">
                        <i className="frown icon"></i>
                        <pre>Oh no you lost on Tatooine planet</pre>
                        <Link to="/"> Back to Earth!!</Link>
                    </div>
                </div>
            </div>
        );
    }
}


export default NotFound;