import React, { useState, useEffect } from 'react';
import https from '../core/api/https';
import TodoItem from '../TodoItem';
import classes from './ToDoBlock.module.scss';

const TodoBlock = ({ activeModal, todos, setActiveModal, setTasks }) => {
    const [todo, setTodo] = useState([]);
    // const [changeId, setChangeId] = useState(0);

    // const handleChangeCurrentTodo = (id) => {
    //     setChangeId(id)
    // }

    let header = { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}` }
    const getAllTodo = async () => {
        return await https.get("/todo/", { headers: header })
            .then(res => {
                setTodo(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    };
    useEffect(() => {
        getAllTodo(setTodo)
    }, []);

    useEffect(() => {

    }, [todo]);

    return (
        <div className={classes.todo_block}>
            {todo && todo.length > 0 ? todo.map((data, index) => {
                return <TodoItem
                    key={index}
                    // handleChangeCurrentTodo={handleChangeCurrentTodo}
                    // currentTodo={changeId === data.id}
                    setActiveModal={setActiveModal}
                    activeModal={activeModal}
                    setTasks={setTasks}
                    data={data}
                    getAllTodo={getAllTodo}
                />
            })
                : <p>not todo</p>}
        </div>
    )
}

export default TodoBlock