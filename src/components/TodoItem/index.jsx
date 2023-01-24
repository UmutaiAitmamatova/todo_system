import React, { useState } from "react";
import classes from "./TodoItem.module.scss";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import TutorialService from "../core/api";
import ModalForm from '../ModalForm'

const TodoItem = ({setActiveModal,  data, key, handleChangeCurrentTodo, currentTodo}) => {
    const [newValue, setNewValue] = useState('');
    
    const handleEditTodo = (id) => {
        setActiveModal(false)
    }
    return currentTodo ? <ModalForm/> : (
        <div className={classes.todo_item}>
            <div className={classes.top}>
                
                <div className={classes.title}> <span>Title:</span> <br /> {data.title}</div>
                <div className={classes.btns}>
                    <button onClick={() => handleEditTodo(data.id)}><BiEdit/></button>
                    <button><AiFillDelete /></button>
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
