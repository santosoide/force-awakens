import axios from 'axios';

// People List
export const FETCH_PEOPLES = 'FETCH_PEOPLES';
export const FETCH_PEOPLES_SUCCESS = 'FETCH_PEOPLES_SUCCESS';
export const FETCH_PEOPLES_FAILURE = 'FETCH_PEOPLES_FAILURE';
export const SAVE_SCROLL_POSITION = 'SAVE_SCROLL_POSITION';

const API_URL = 'http://swapi.co/api';

export function fetchPeoples(page) {
    const request = axios({
        method: 'get',
        url: `${API_URL}/people/?page=${page}&format=json`,
        headers: []
    });

    return {
        type: FETCH_PEOPLES,
        payload: request
    };
}

export function fetchPeoplesSuccess(peoples) {
    return {
        type: FETCH_PEOPLES_SUCCESS,
        payload: peoples
    };
}

export function fetchPeoplesFailure(error) {
    return {
        type: FETCH_PEOPLES_FAILURE,
        payload: error
    };
}

export function savePosition(position) {
    return {
        type: SAVE_SCROLL_POSITION,
        position
    }
}
