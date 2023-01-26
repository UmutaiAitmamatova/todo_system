import React, { useEffect, useState } from 'react';
import classes from './Admin.module.scss';
import Button from '../../components/common/Button'
import ModalForm from '../../components/ModalForm';
import https from '../../components/core/api/https';
import BlockTodo from '../../components/BlockTodo';

const Admin = () => {
  const [activeModal, setActiveModal] = useState(false);
  const [todoList, setTodoList] = useState([]);

let header = { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}` };
const getAllTodo = async () => {
    return await https.get("/todo/", { headers: header })
        .then(res => {
            setTodoList(res.data);
        })
        .catch(err => {
            console.log(err);
        })
};
useEffect(() => {
  getAllTodo();
}, []);

  return (
    <div className={classes.admin}>
      <div className={classes.container}>
        <div className={classes.inner}>
          <Button onClick={() => setActiveModal(true)} title="Add todo" />
          <div>{activeModal &&
            <ModalForm
              todo={todoList}
              getAllTodo={getAllTodo}
              setActiveModal={setActiveModal}
              activeModal={activeModal}
            />
          }
          </div>
          <div className={classes.content}>
            <BlockTodo admin setTodoList={setTodoList} todoList={todoList}  getAllTodo={getAllTodo}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;