import http from "./https";

const refresh = localStorage.getItem('refreshToken')
export const user = localStorage.getItem('accessToken')
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

const singIn = async (body) => {
  http.post('/token/', body, { headers: header })
  .then(res => {
    localStorage.setItem('accessToken', res.data.access)
    localStorage.setItem('refreshToken', res.data.refresh)
  })
  .catch(err => {
    console.log(err);
  })
}
const singUp = async (body) => {
  http.post('/users/', body, { headers: header })
  .then(res => {
    console.log('ress', res);
    localStorage.setItem('userId', res.data.id)
    singIn({
      username: body.username,
      password: body.password,
    }).then(res => console.log(res))
  })
  .catch(err => {
    console.log(err);
  })
}

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
    })
    .catch(err => {
        console.log(err);
    })
  };
  

const editTodo = async (id, data) => {
  return await http.patch(`/todo/${id}/`, data, { headers: header })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    })
};
  
  const removeTodo = id => {
    return http.delete(`/todo/${id}/`, { headers: header });
  };
  

  const TutorialService = {
    singUp,
    singIn,
    logOut,
    getAllTodo,
    getTodo,
    createTodo,
    editTodo,
    removeTodo,
    getUserInfo
  };
  
  export default TutorialService;
