import React, { useState } from 'react';
import classes from './Admin.module.scss'
import Button from '../../components/common/Button'
import ModalForm from '../../components/ModalForm';
import TodoBlock from '../../components/ToDoBlock';

const Admin = () => {
  const [activeModal, setActiveModal] = useState(true);
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

  return (
    <div className={classes.admin}>
      <div className={classes.conteiner}>
        <div className={classes.inner}>
          <Button onClick={() => setActiveModal(false)} title="Add todo" />
          <div>{!activeModal &&
            <ModalForm
              todos={todos}
              setActiveModal={setActiveModal}
              activeModal={activeModal}
              handleChangeTodoObj={handleChangeTodoObj}
            />
          }
          </div>

          <div className={classes.content}>
            <TodoBlock setActiveModal={setActiveModal} activeModal={activeModal} todos={todos}/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Admin;