import React, { useState } from "react";
import classes from "./TodoItem.module.scss";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import TutorialService from "../core/api";
import ModalForm from '../ModalForm'
import Swal from "sweetalert2";

const TodoItem = ({activeModal, setActiveModal,  data, handleChangeCurrentTodo, currentTodo, getAllTodo}) => {
    const [edit, setEdit] = useState(false)
    const handleEditTodo = (id) => {
        setEdit(true)
    }

    console.log('data.id', data.id);
    const removeTodos = (e) => {
        Swal.fire({
            title: 'Вы уверены?',
            text: "Вы не сможете вернуть данные!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Да, удалить!'
        }).then((result) => {
            if (result.isConfirmed) {
                TutorialService.removeTodo(data.id)
                    .then(() => {
                        getAllTodo()
                        Swal.fire(
                            'Удалено!',
                            'Данные успешно удалены.',
                            'success'
                        )
                    })
            }
        })
        e.stopPropagation()
    }


    return edit ? <ModalForm data={data} setEdit={setEdit} edit={edit}/> : (
        <div className={classes.todo_item}>
            <div className={classes.top}>
                
                <div className={classes.title}> <span>Title:</span> <br /> {data.title}</div>
                <div className={classes.btns}>
                    <button onClick={() => handleEditTodo(data.id)}><BiEdit/></button>
                    <button onClick={removeTodos}><AiFillDelete /></button>
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
