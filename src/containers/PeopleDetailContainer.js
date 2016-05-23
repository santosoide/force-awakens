import PeopleDetail from '../components/PeopleDetail';
import { fetchPeople, fetchPeopleSuccess, fetchPeopleFailure } from '../actions/peoples';
import { connect } from 'react-redux';

function mapStateToProps(globalState, ownProps) {
    return {activePeople: globalState.peoples.activePeople, peopleId: ownProps.id};
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPost: (id) => {
            dispatch(fetchPeople(id))
                .then((data) => {
                    !data.error ? dispatch(fetchPeopleSuccess(data.payload)) : dispatch(fetchPeopleFailure(data.payload));
                })
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(PeopleDetail);
