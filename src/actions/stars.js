import api from '../api/stars-api'

// Fetch List Stars
export const STARS_LIST_REQUEST = 'STARS_LIST_REQUEST';
export const STARS_LIST_SUCCESS = 'STARS_LIST_SUCCESS';
export const STARS_LIST_FAILURE = 'STARS_LIST_FAILURE';
export const SAVE_SCROLL_POSITION = 'SAVE_SCROLL_POSITION';

// fetch Stars
export const FETCH_STAR = 'FETCH_STAR';
export const FETCH_STAR_SUCCESS = 'FETCH_STAR_SUCCESS';
export const FETCH_STAR_FAILURE = 'FETCH_STAR_FAILURE';

/**
 * Fetch List Stars
 */
export function fetchStars(page = 1) {
    return (dispatch) => {
        dispatch(listLoading());
        api.fetchStars(page)
            .then(({ data }) => {
                dispatch(listLoaded(data))
            })
            .catch((error) => {
                dispatch(listFailed(error))
            })
    }
}

export function listLoading() {
    return {
        type: STARS_LIST_REQUEST
    }
}

export function listLoaded(data) {
    return {
        type: STARS_LIST_SUCCESS,
        data
    }
}

export function listFailed(error) {
    return {
        type: STARS_LIST_FAILURE,
        error
    }
}

export function savePosition(position) {
    return {
        type: SAVE_SCROLL_POSITION,
        position
    }
}

/**
 * Fetch detail star
 */
export function fetchStar(id) {
    return (dispatch) => {
        dispatch(getLoading());
        return api.fetchStar(id)
    }
}

export function getLoading() {
    return {
        type: FETCH_STAR
    }
}

export function getLoaded(data) {
    return {
        type: FETCH_STAR_SUCCESS,
        data
    }
}

export function getFailed(error) {
    return {
        type: FETCH_STAR_FAILURE,
        error
    }
}