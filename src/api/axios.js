import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://amazon-cln-api.herokuapp.com/api/v1' // The API (cloud function) URL
})

export default instance