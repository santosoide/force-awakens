import React ,{Component}from 'react';
import Parallax from '../components/ParallaxHome';

export default class App extends Component {

    render() {
        return (
            <div>
                <div className="ui segment">
                    {this.props.children}
                </div>
            </div>
        );
    }
}