import {connect} from 'react-redux';
import {fetchPeoples,fetchPeoplesSuccess,fetchPeoplesFailure} from '../actions/peoples';
import PeoplesList from '../components/PeoplesList';

const mapStateToProps = (state) => {
    return {
        peoplesList: state.peoples.peoplesList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPeoples: (page) => {
            dispatch(fetchPeoples(page)).then((response)=> {
                !response.error ? dispatch(fetchPeoplesSuccess(response.payload)) : dispatch(fetchPeoplesFailure(response.payload));
            })
        }
    }
};

const PeoplesListContainer = connect(mapStateToProps, mapDispatchToProps)(PeoplesList);

export default PeoplesListContainer