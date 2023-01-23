import React, {useState, useEffect} from 'react';
import TodoItem from '../TodoItem';
import classes from './ToDoBlock.module.scss';

const TodoBlock = ({todo, getTodos, setTasks}) => {
    console.log('todo', todo);
    useEffect(() => {
        getTodos()
    }, [])
    
    return (
        <div className={classes.todo_block}>
            {todo && todo.length > 0 ? todo.map((data, key) => {
                console.log('DATA', data);
                return <TodoItem getTodos={getTodos} setTasks={setTasks} data={data} key={key}/> 
            })
            : <p>not todo</p>}
        </div>
    )
}

export default TodoBlock