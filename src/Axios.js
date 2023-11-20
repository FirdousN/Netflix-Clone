import axios from "axios";
import {baseUrl} from './constants/constants.js'

const instance = axios.create({
    // baseURL: 'https://api.themoviedb.org/3/',
    baseURL: baseUrl,
});

export default instance;
