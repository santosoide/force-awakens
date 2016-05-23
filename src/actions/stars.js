import api from '../api/stars-api'

// Stars List
export const STARS_LIST_REQUEST = 'STARS_LIST_REQUEST';
export const STARS_LIST_SUCCESS = 'STARS_LIST_SUCCESS';
export const STARS_LIST_FAILURE = 'STARS_LIST_FAILURE';

// fetch Stars
export const STARS_GET_REQUEST = 'STARS_GET_REQUEST';
export const STARS_GET_SUCCESS = 'STARS_GET_SUCCESS';
export const STARS_GET_FAILURE = 'STARS_GET_FAILURE';

export const LOAD_ADDITIONAL_REQUEST = 'LOAD_ADDITIONAL_REQUEST';
export const LOAD_ADDITIONAL_SUCCESS = 'LOAD_ADDITIONAL_SUCCESS';
export const LOAD_ADDITIONAL_FAILURE = 'LOAD_ADDITIONAL_FAILURE';

export const STARS_CLEAR = 'STARS_CLEAR';
export const SAVE_SCROLL_POSITION = 'SAVE_SCROLL_POSITION';

/**
 * List available stars
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

/**
 * Fetch star detail
 */
export function fetchStar(id) {
    return (dispatch) => {
        dispatch(getLoading());
        return api.fetchStar(id)
    }
}

export function getLoading() {
    return {
        type: STARS_GET_REQUEST
    }
}

export function getLoaded(data) {
    return {
        type: STARS_GET_SUCCESS,
        data
    }
}

export function getFailed(error) {
    return {
        type: STARS_GET_FAILURE,
        error
    }
}

/**
 * Get additional Details
 */
export function getAdditional(url, additional, id) {
    return (dispatch) => {
        dispatch(additionalLoading(id, additional));
        api.loadAdditional(url)
            .then(({ data }) => {
                dispatch(additionalLoaded(data, additional, id))
            })
            .catch((error) => {
                dispatch(additionalFailed(error, additional, id))
            })
    }
}

export function additionalLoading(id, section) {
    return {
        type: LOAD_ADDITIONAL_REQUEST,
        id,
        section
    }
}

export function additionalLoaded(data, section, id) {
    return {
        type: LOAD_ADDITIONAL_SUCCESS,
        data,
        section,
        id
    }
}

export function additionalFailed(error, section, id) {
    return {
        type: LOAD_ADDITIONAL_FAILURE,
        error,
        section,
        id
    }
}

export function clearDetail() {
    return {
        type: STARS_CLEAR
    }
}

export function savePosition(position) {
    return {
        type: SAVE_SCROLL_POSITION,
        position
    }
}
