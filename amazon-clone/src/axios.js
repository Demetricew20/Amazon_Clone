import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-fbc7a.cloudfunctions.net/api'
});

export default instance;