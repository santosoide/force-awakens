import { combineReducers } from 'redux';

import * as starActions from '../actions/stars';

export default function stars(state = [], action) {
    switch (action.type) {
        case starActions.STARS_LIST_SUCCESS:
            let data = action.data.results.map((star) => {
                let chunkedUrl = star.url.split('/').filter((char) => {
                    return char !== ''
                });
                star.id = chunkedUrl[chunkedUrl.length - 1];
                return star
            });
            return state.concat(data);
        default:
            return state
    }
}

export function position(state = 0, action) {
    switch (action.type) {
        case starActions.SAVE_SCROLL_POSITION:
            return action.position;
        default:
            return state
    }
}

const DETAIL_STATE = {
    data: {}
};

export function detail(state = DETAIL_STATE, action) {
    switch (action.type) {
        case starActions.FETCH_STAR_SUCCESS:
            return Object.assign({}, state, {
                data: action.data
            });
        default:
            return state
    }
}

export default combineReducers({
    stars,
    detail,
    position
})
