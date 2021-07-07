import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'https://swapi.co/api',
  headers: {
    'Content-Type': 'application/json',
  }
});

export default {

    fetchStars: (page = 1) => {
        return httpClient.get(`/people?page=${page}`)
    },

    fetchStar: (id) => {
        return httpClient.get(`/people/${id}`)
    },

    loadAdditional: (url) => {
        return httpClient.get('/people')
    }
}
