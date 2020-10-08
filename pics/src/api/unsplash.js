 import axios from 'axios';

 export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID yVQObnt6a0QebGaAWmXZmcQBhT5-u13UHwpse-yOto8'
    }
 });