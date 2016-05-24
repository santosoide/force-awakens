import React, { Component } from 'react';
import {Link} from 'react-router';

class NotFound extends Component {
    render() {
        return (
            <div>
                <div className="ui three column grid stackable" style={{marginTop:'40px'}}>
                    <div className="column centered">
                        <div className="ui segment">
                            <div className="ui fluid red message" style={{textAlign:'center'}}>
                                <i className="frown icon"></i>
                                <h3> Oh no you get lost on Tatooine planet</h3>
                                <Link to="/"> Back to Earth!!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default NotFound;