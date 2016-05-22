import React ,{Component}from 'react';
import People from '../components/People';
import Starships from '../components/Starship';

export default class Home extends Component {

    render() {
        return (
            <div>
                <People/>
                <Starships/>
            </div>
        );
    }
};
