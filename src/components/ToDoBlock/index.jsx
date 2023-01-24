import React, { useState, useEffect } from 'react';
import TodoItem from '../TodoItem';
import classes from './ToDoBlock.module.scss';

const TodoBlock = ({ todos, setActiveModal, setTasks }) => {
    const [changeId, setChangeId] = useState(0);

    const handleChangeCurrentTodo = (id) => {
        setChangeId(id)
    }
    
    return (
        <div className={classes.todo_block}>
            {todos && todos.length > 0 ? todos.map((data, key) => {
                return <TodoItem
                    handleChangeCurrentTodo={handleChangeCurrentTodo}
                    currentTodo={changeId === data.id}
                    setActiveModal={setActiveModal}
                    setTasks={setTasks}
                    data={data}
                    key={key} />
            })
                : <p>not todo</p>}
        </div>
    )
}

export default TodoBlock