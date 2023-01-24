import React from "react";
import classes from "./TodoItem.module.scss";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const TodoItem = ({getTodos, setTasks, data, key}) => {
    // console.log('DATA', data);
    
    return (
        <div className={classes.todo_item}>
            <div className={classes.top}>
                
                <div className={classes.title}> <span>Title:</span> <br /> {data.title}</div>
                <div className={classes.btns}>
                    <BiEdit />
                    <AiFillDelete />
                </div>
            </div>
            
            <div className={classes.description}>
            <span>Discripshin:</span> <br />
                {data.description}
            </div>
            <div className={classes.date}>{data.date}</div>
        </div>
    );
};

export default TodoItem;
