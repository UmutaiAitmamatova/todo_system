import axios from "axios";
import http from "./https";

const logOut = (refresh) => {
  return http.post('/token/refresh/', {refresh})
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    })
}

const getAllTodo = () => {
    return http.get("/todo/", {})
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
};
  
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
    return http.post("/todo/", data)
    .then(res => {
        console.log(res.data);
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
