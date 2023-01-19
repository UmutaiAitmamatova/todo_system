import axios from "axios";

// export const authApi = axios.create({
//     baseURL: `http://todolistapi.pythonanywhere.com/api/`,
// });


export const authUser = async (userName, email, password) => {
    console.log('userName, email, password', userName, email, password)
    const res = await axios.post(`http://todolistapi.pythonanywhere.com/api/users/`,
    )
    console.log('res', res);   
}