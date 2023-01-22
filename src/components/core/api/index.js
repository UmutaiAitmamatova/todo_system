import axios from "axios";
import http from "./https";

// let header = { 'Authorization': `Bearer ${accessToken}` }


// getToken(name, password) {
//     return instance.post('token/', { username: name, password: password })
// }


const getAll = () => {
    return http.get("/todo/", {})
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
};
  
  const get = id => {
    return http.get(`/todo/${id}`)
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log('GetTodo', err);
    })
  };
  
  const create = data => {
    return http.post("/todo/", data)
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err);
    })
  };
  
  const update = (id, data) => {
    return http.put(`/todo/${id}`, data);
  };
  
  const remove = id => {
    return http.delete(`/todo/${id}`);
  };
  
  const removeAll = () => {
    return http.delete(`/todo`);
  };
  
  const findByTitle = title => {
    return http.get(`/todo?title=${title}`);
  };
  
  const TutorialService = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle
  };
  
  export default TutorialService;
