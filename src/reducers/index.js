import { combineReducers } from 'redux';
import PeoplesReducer from './reducer_peoples';

const rootReducer = combineReducers({
    peoples: PeoplesReducer
});

export default rootReducer;
