import React, { useEffect, useState } from 'react';
import classes from './Admin.module.scss'
import Button from '../../components/common/Button'
import ModalForm from '../../components/ModalForm';
import TutorialDataService from '../../components/core/api'
import TodoBlock from '../../components/TodoBlock';
import https from '../../components/core/api/https';

const Admin = () => {
  const [activeModal, setActiveModal] = useState(true);
  const [tasks, setTasks] = useState(false);
  // const [todo, setTodo] = useState([]);
  const [todos, setTodos] = useState({
        id: '',
        title: '',
        description: '',
        date: '',
        user: ''
});

const handleChangeTodoObj = (key, value) => {
  setTodos(old => ({
      ...old,
      [key]: value
  }))
};


  let header = { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}` }

  const getAllTodo = async () => {
      return await https.get("/todo/",  { headers: header })
          .then(res => {
            setTodos(res.data)
          })
          .catch(err => {
              console.log(err);
          })
  };

  useEffect(() => {
    getAllTodo()
  }, [todos]);

  const onClickBtn = () => {
    setActiveModal(false)
  }



  return (
    <div className={classes.admin}>
      <div className={classes.conteiner}>
        <div className={classes.inner}>
          <Button onClick={onClickBtn} title="Add todo" />
          <div>{!activeModal &&
            <ModalForm
              todos={todos}
              tasks={tasks}
              setTasks={setTasks}
              setActiveModal={setActiveModal}
              handleChangeTodoObj={handleChangeTodoObj}
            />
          }
          </div>

          <div className={classes.content}>
            <TodoBlock setTasks={setTasks} setActiveModal={setActiveModal} todos={todos}/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Admin;