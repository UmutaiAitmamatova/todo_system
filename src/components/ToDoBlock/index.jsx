import React, { useState, useEffect } from 'react';
import https from '../core/api/https';
import TodoItem from '../TodoItem';
import classes from './ToDoBlock.module.scss';

const TodoBlock = ({admin}) => {
    const [todo, setTodo] = useState([]);

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
        getAllTodo()
    }, []);

    useEffect(() => {
    }, [todo]);

    return (
        <div className={classes.todo_block}>
            {todo && todo.length > 0 ? todo.map((data, index) => {
                return <TodoItem
                    key={index}
                    data={data}
                    getAllTodo={getAllTodo}
                    admin={admin}
                />
            })
                : <p>not todo</p>}
        </div>
    )
}

export default TodoBlock