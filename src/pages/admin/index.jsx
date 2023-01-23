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

  const getTodos = async () => {
    await TutorialDataService.getAllTodo()
        .then(res => setTodo(res))
  }

  const onClickBtn = () => {
    setActiveModal(false)
  }

  const initialTutorialState = {
    id: null,
    title: "",
    description: "",
    data: "",
    published: false
  };
  const [tutorial, setTutorial] = useState(initialTutorialState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      title: tutorial.title,
      description: tutorial.description,
      data: tutorial.data
    };

    TutorialDataService.create(data)
      .then(response => {
        setTutorial({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newTutorial = () => {
    setTutorial(initialTutorialState);
  };

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
              saveTutorial={saveTutorial}
              valueDescription={tutorial.description}
              handleInputChange={handleInputChange}
              valueTitle={tutorial.title}
              valueData={tutorial.data}
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