import axios from 'axios';

// People List
export const FETCH_PEOPLES = 'FETCH_PEOPLES';
export const FETCH_PEOPLES_SUCCESS = 'FETCH_PEOPLES_SUCCESS';
export const FETCH_PEOPLES_FAILURE = 'FETCH_PEOPLES_FAILURE';

// fetch People
export const FETCH_PEOPLE = 'FETCH_PEOPLE';
export const FETCH_PEOPLE_SUCCESS = 'FETCH_PEOPLE_SUCCESS';
export const FETCH_PEOPLE_FAILURE = 'FETCH_PEOPLE_FAILURE';
export const RESET_ACTIVE_PEOPLE = 'RESET_ACTIVE_PEOPLE';

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

// fetch People
export function fetchPeople(id) {
    const request = axios.get(`${API_URL}/people/${id}`);

    return {
        type: FETCH_PEOPLE,
        payload: request
    };
}


export function fetchPeopleSuccess(activePeople) {

    return {
        type: FETCH_PEOPLE_SUCCESS,
        payload: activePeople
    };
}

export function fetchPeopleFailure(error) {
    return {
        type: FETCH_PEOPLE_FAILURE,
        payload: error
    };
}