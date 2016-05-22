import React ,{Component} from 'react';
import Navbar from '../components/Navbar';
import PeopleListContainer from '../containers/PeopleListContainer';

class PeopleIndex extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <PeopleListContainer />
            </div>
        )
    }
}

export default PeopleIndex;