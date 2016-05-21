import React, { Component } from 'react';
import {Link} from 'react-router';

class NotFound extends Component {
    render() {
        return (
            <div>
                <div className="ui segment">
                    <div className="ui yellow message">
                        <i className="search icon"></i>
                        <pre>Page NotFound</pre>
                        <Link property="notfound" to="/">Back to home</Link>

                    </div>
                </div>
            </div>
        );
    }
}


export default NotFound;