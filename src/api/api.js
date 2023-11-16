import axios from 'axios';

const apiclient = axios.create({
    baseURL: 'http://localhost:5002/api',
    timeout: 1000,
});

