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

// getTodo(id) {
//   return instance.get(`todo/${id}/`, { headers: header })
//       .then(res => res.data).catch(res => {
//           if (res.response.status === 401) {
//               return handleAuthError(this.getTodo, id)
//           }
//       })
// },

const getUserInfo = async () => {
  http.get('/users/get_userinfo/', { headers: header })
    .then(res => {
      localStorage.setItem('userId', res.data.id)
      console.log('', res.data);
    })
    .catch(err => {
      console.log(err);
    })
    
}


let header = { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}` }

const getAllTodo = async () => {
    return await http.get("/todo/",  { headers: header })
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
  

  
const editTodo = async (id, data) => {
  return await http.put(`/todo/${id}`, data, { headers: header })
    .then(res => {
      console.log(res.data);
      console.log('res', header);
    })
    .catch(err => {
      console.log(err);
    })
    // try {
    //   const {data} = await http.put(`/todo/${id}`, editElement, { headers: header })
    // } catch (error) {
    //   console.log(error.message);
    // }
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
    editTodo,
    removeTodo,
    removeAllTodo,
    findByTitle,
    getUserInfo
  };
  
  export default TutorialService;
