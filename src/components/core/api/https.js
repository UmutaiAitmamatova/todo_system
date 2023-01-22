import axios from "axios";
// const hostURL = "http://todolistapi.pythonanywhere.com";
// const apiURL = `/api`;
// const version = ``;
// const baseURL = `${hostURL}${apiURL}${version}`;

// let http = axios.create({
//   baseURL,
//   timeout: 30000,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default http;
// export { http, hostURL, baseURL };

export default axios.create({
    baseURL: "http://todolistapi.pythonanywhere.com/api",
    headers: {
    "Content-type": "application/json"
    }
});