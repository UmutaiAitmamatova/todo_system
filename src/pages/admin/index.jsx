import React, { useEffect, useState } from 'react';
import classes from './Admin.module.scss'
import Button from '../../components/common/Button'
import ModalForm from '../../components/ModalForm';
import TodoBlock from '../../components/ToDoBlock';
import TutorialService from '../../components/core/api' 
import https from '../../components/core/api/https';

const Admin = () => {
  const [activeModal, setActiveModal] = useState(true);
  const [todo, setTodo] = useState([]);
  const [todos, setTodos] = useState({
        id: '',
        title: '',
        description: '',
        date: '',
});
const handleChangeTodoObj = (key, value) => {
  setTodos(old => ({
      ...old,
      user: localStorage.getItem('userId'),
      [key]: value
  }))
};

let header = { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}` }
const getAll = async () => {
    return await https.get("/todo/", { headers: header })
        .then(res => {
            setTodo(res.data)
        })
        .catch(err => {
            console.log(err);
        })
};
useEffect(() => {
  getAll()
}, []);
// useEffect(() => {
// }, [todo]);
  return (
    <div className={classes.admin}>
      <div className={classes.container}>
        <div className={classes.inner}>
          <Button onClick={() => setActiveModal(false)} title="Add todo" />
          <div>{!activeModal &&
            <ModalForm
              todo={todo}
              getAll={getAll}
              todos={todos}
              setActiveModal={setActiveModal}
              activeModal={activeModal}
              handleChangeTodoObj={handleChangeTodoObj}
            />
          }
          </div>

          <div className={classes.content}>
            <TodoBlock admin setActiveModal={setActiveModal} activeModal={activeModal} todos={todos}/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Admin;