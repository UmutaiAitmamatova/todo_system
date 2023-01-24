import React, { useState } from 'react';
import classes from './Admin.module.scss'
import Button from '../../components/common/Button'
import ModalForm from '../../components/ModalForm';
import TutorialDataService from '../../components/core/api'
import TodoBlock from '../../components/TodoBlock';

const Admin = () => {
  const [activeModal, setActiveModal] = useState(true);
  const [tasks, setTasks] = useState(false);
  const [todo, setTodo] = useState([]);

  // console.log(localStorage.getItem('userId'));

  const getTodos = async () => {
    await TutorialDataService.getAllTodo()
        .then(res => setTodo(res.data))
        .catch(err => {
          console.log(err);
        })
  }
  // console.log('todo', todo);

  const onClickBtn = () => {
    setActiveModal(false)
  }


  // const handleInputChange = event => {
  //   const { name, value } = event.target;
  //   setTodo({ ...todo, [name]: value });
  // };



  return (
    <div className={classes.admin}>
      <div className={classes.conteiner}>
        <div className={classes.inner}>
          <Button onClick={onClickBtn} title="Add todo" />
          <div>{!activeModal &&
            <ModalForm
              tasks={tasks}
              setTasks={setTasks}
              getTodos={getTodos}
              // handleInputChange={handleInputChange}
              setActiveModal={setActiveModal}
            />
          }
          </div>

          <div className={classes.content}>
            <TodoBlock setTasks={setTasks} getTodos={getTodos} todo={todo}/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Admin;