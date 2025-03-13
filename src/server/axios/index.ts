import axios from 'axios'

export const apiRequest = (baseURL: string) => {
    return axios.create({
        baseURL,
        timeout: 5000,
    })
}

axios.interceptors.request.use((config) => {
    return config
}, (error) => {
    return Promise.reject(error)
})