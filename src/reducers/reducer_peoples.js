import {
    FETCH_PEOPLES,FETCH_PEOPLES_SUCCESS,FETCH_PEOPLES_FAILURE
} from '../actions/peoples';

const INITIAL_STATE = {
    peoplesList: {peoples: {results: []}, error: null, loading: false}
};

export default function (state = INITIAL_STATE, action) {
    let error;

    switch (action.type) {
        case FETCH_PEOPLES:
            // start fetching peoples and set loading = true
            return {...state, peoplesList: {peoples: [], error: null, loading: true}};
        case FETCH_PEOPLES_SUCCESS:
            let data = action.payload.data.results.map((people) => {
                let chunkedUrl = people.url.split('/').filter((char) => {
                    return char !== ''
                });
                people.id = chunkedUrl[chunkedUrl.length - 1];
                return people
            });
            // return list of peoples and make loading = false
            return {...state, peoplesList: {peoples: action.payload.data, error: null, loading: false}};
        case FETCH_PEOPLES_FAILURE:
            // return error and make loading = false
            error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
            return {...state, peoplesList: {peoples: [], error: error, loading: false}};
        default:
            return state;
    }
}
