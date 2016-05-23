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

let INITIAL_DETAIL_STATE = {
    data: {},
    additional: []
};

export default function detail(state = INITIAL_DETAIL_STATE, action) {
    switch (action.type) {
        case starActions.STARS_GET_SUCCESS:
            return Object.assign({}, state, {
                data: action.data
            });
        case starActions.LOAD_ADDITIONAL_REQUEST:
            return Object.assign({}, state, {
                additional: state.additional.concat([Object.assign({}, {
                    id: action.id,
                    section: action.section
                })])
            });
        case starActions.LOAD_ADDITIONAL_SUCCESS:
            return Object.assign({}, state, {
                additional: state.additional.map((additional) => {
                    let result = Object.assign({}, additional, {
                        loading: false,
                        failed: false
                    });
                    if (additional.id === action.id) {
                        result.data = action.data
                        result.section = action.section
                    }
                    return result
                })
            });
        case starActions.LOAD_ADDITIONAL_FAILURE:
            return Object.assign({}, state, {
                additional: state.additional.map((additional) => {
                    if (additional.id === action.id) {
                        return Object.assign({}, {
                            loading: false,
                            failed: true,
                            section: action.section
                        })
                    }
                })
            });
        case starActions.STARS_CLEAR:
            return INITIAL_DETAIL_STATE;
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

export function loading(state = false, action) {
    switch (action.type) {
        case starActions.STARS_LIST_REQUEST:
        case starActions.STARS_GET_REQUEST:
            return true;
        default:
            return state
    }
}

export function failed(state = false, action) {
    switch (action.type) {
        case starActions.STARS_LIST_FAILURE:
        case starActions.STARS_GET_FAILURE:
            return true;
        default:
            return state
    }
}

export default combineReducers({
    stars,
    detail,
    position,
    loading,
    failed
})
