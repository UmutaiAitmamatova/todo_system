import axios from "axios";

const accessToken = localStorage.getItem('accessToken');

axios.defaults.headers.common = {'Authorization': `bearer ${accessToken}`}

export default axios.create({
    baseURL: "https://todolistapi.pythonanywhere.com/api",
    headers: {
    "Content-type": "application/json",
    Authorization: accessToken ? `Token ${accessToken}` : '',
    }
});

