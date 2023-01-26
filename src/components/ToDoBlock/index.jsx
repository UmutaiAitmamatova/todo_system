import React from 'react';
import TodoItem from '../TodoItem';
import classes from './TodoBlock.module.scss';

const TodoBlock = ({admin, getAllTodo, todoList}) => {
    return (
        <div className={classes.todo_block}>
            {todoList && todoList.length > 0 ? todoList.map((data, index) => {
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
};

export default TodoBlock;