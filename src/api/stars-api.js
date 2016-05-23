import axios from 'axios'
const API_URL = 'http://swapi.co/api/people';

export default {

    fetchStars: (page = 1) => {
        return axios.get(`${API_URL}/?page=${page}`)
    },

    fetchStar: (id) => {
        return axios.get(`${API_URL}/${id}`)
    },

    loadAdditional: (url) => {
        return axios.get(url)
    }
}
