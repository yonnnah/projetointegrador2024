import axios from "axios";
const URL_API = 'http://127.0.0.1:8000/api/'

const instance = axios.create({
    withCredentials: true, 
    headers: {
        'Access-Control-Allow-Origem': '*',
        'Content-Type': 'application/json'
    },
    baseURL: URL_API
}) 

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers['Authorizations'] = `Bearer ${token}`
        } 
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default instance;