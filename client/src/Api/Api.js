import Axios from 'axios';

export default Axios.create({
    baseURL: process.env.REACT_APP_HOST,
    withCredentials: true,
    headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}
});