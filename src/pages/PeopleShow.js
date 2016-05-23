import React ,{Component} from 'react';
import { connect } from 'react-redux';
import PeopleDetailContainer from '../containers/PeopleDetailContainer';

class PeopleShow extends Component {

    //static contextTypes = {
    //    router: PropTypes.object
    //};

    render() {
        return (
            <div>
                <PeopleDetailContainer id={this.props.params.id}/>
            </div>
        )
    }
}

export default PeopleShow;