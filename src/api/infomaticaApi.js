import axios from "axios";

const infomaticaApi = axios.create({
    baseURL:'http://localhost:8080'
})

infomaticaApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'Authorization': sessionStorage.getItem('token'),
    }
    return config;
})

export default infomaticaApi;