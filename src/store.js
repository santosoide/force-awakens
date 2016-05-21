import {createStore,combineReducers} from 'redux';
import {reducer as formReducers} from 'redux-form';

const reducers = {
    form: formReducers
};

const reducer = combineReducers(reducers);
const store = createStore(reducer);
export default store;