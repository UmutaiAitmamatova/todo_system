import React, { useState } from "react";
import classes from "./TodoItem.module.scss";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import TutorialService from "../core/api";
import ModalForm from '../ModalForm'
import Swal from "sweetalert2";

function TodoItem ({data, getAllTodo, admin}){
    const [edit, setEdit] = useState(false)
    const handleEditTodo = () => {
        setEdit(true)
    }
    const removeTodos = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You cannot return data!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#8300cc",
            cancelButtonColor: "d8d8d8",
            confirmButtonText: "Yes",
        }).then((result) => {
            if (result.isConfirmed) {
                TutorialService.removeTodo(data.id)
                    .then(() => {
                        getAllTodo()
                        Swal.fire("Removed", "", "success");
                    })
            }
        })
    }

    return edit ? <ModalForm data={data} setEdit={setEdit} edit={edit} getAllTodo={getAllTodo}/> : (
        <div className={classes.todo_item}>
            <div className={classes.top}>               
                <div className={classes.title}> <span>Title:</span> <br /> {data.title}</div>
                <div className={classes.btns}>
                    {admin && <button onClick={() => handleEditTodo(data.id)}><BiEdit/></button>}
                    {admin && <button onClick={removeTodos}><AiFillDelete /></button>}
                </div>
            </div>
            <div className={classes.description}>
            <span>Discripshin:</span> <br />
                {data.description}
            </div>
            <div className={classes.date}>
                <span>Date:</span> <br />
                {data.date}</div>
        </div>
    );
};

export default TodoItem;
