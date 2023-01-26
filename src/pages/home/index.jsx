import React, { useEffect, useState } from 'react';
import classes from './Home.module.scss'
// import TodoBlock from '../../components/TodoBlock';
import https from '../../components/core/api/https';

const Home = () => {
  const [todoList, setTodoList] = useState([]);

  let header = { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}` }
  const getAllTodo = async () => {
      return await https.get("/todo/", { headers: header })
          .then(res => {
              setTodoList(res.data)
          })
          .catch(err => {
              console.log(err);
          })
  };
  useEffect(() => {
    getAllTodo()
  }, []);
  return (
    <div className={classes.home}>
      <div className={classes.container}>
          <h2>Tasks</h2>
          <div className={classes.content}>
            {/* <TodoBlock setTodoList={setTodoList} todoList={todoList} getAllTodo={getAllTodo}/> */}
          </div>
      </div>
    </div>
  )
}

export default Home;