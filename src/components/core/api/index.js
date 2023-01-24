import axios from "axios";
import http from "./https";

const refresh = localStorage.getItem('refreshToken')
const logOut = () => {
  return http.post('/token/refresh/', {refresh})
    .then(res => {
      console.log(res.data);
      localStorage.removeItem('refreshToken')
    })
    .catch(err => {
      console.log(err);
    })
}


let header = { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}` }

const getAllTodo = () => {
    return http.get("/todo/",  { headers: header })
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
};


// const getAllTodo = () => {
//     return http.get("/todo/",  {headers: header})
//         .then(res => {
//             console.log(res.data);
//         })
//         .catch(err => {
//             console.log(err);
//         })
// };
  
  const getTodo = id => {
    return http.get(`/todo/${id}`)
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log('GetTodo', err);
    })
  };
  
  const createTodo = data => {
    return http.post("/todo/", data, {headers: header})
    .then(res => {
        console.log(res.data);
        console.log('res', header);
    })
    .catch(err => {
        console.log(err);
    })
  };
  
  const updateTodo = (id, data) => {
    return http.put(`/todo/${id}`, data);
  };
  
  const removeTodo = id => {
    return http.delete(`/todo/${id}`);
  };
  
  const removeAllTodo = () => {
    return http.delete(`/todo`);
  };
  
  const findByTitle = title => {
    return http.get(`/todo?title=${title}`);
  };
  
  const TutorialService = {
    logOut,
    getAllTodo,
    getTodo,
    createTodo,
    updateTodo,
    removeTodo,
    removeAllTodo,
    findByTitle
  };
  
  export default TutorialService;
