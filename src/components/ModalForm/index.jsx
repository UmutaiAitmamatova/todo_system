import React, { useEffect, useState } from 'react';
import classes from './ModalForm.module.scss';
import { AiFillCloseCircle } from 'react-icons/ai'
import Input from '../common/Input'
import { ModalFormConfigs } from './configs';
import { useForm } from 'react-hook-form';
import Button from '../common/Button';
import TutorialService from '../core/api';

const ModalForm = ({ setActiveModal, handleChangeTodoObj, todos, userID, description, title, date, getAllTodo }) => {
    let userId = localStorage.getItem('userId');
    // const newCommentAnswer = {
    //     user: localStorage.getItem('userId'),
    //     // title: todos.title,
    //     // description:todos.description,
    //     // date: todos.date
    // };

    const { registerOptions } = ModalFormConfigs();
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur'
    });
    const handleError = (errors) => { console.log(errors); };
    const handlePostTodo = () => {
            // TutorialService.createTodo().then(() => {
            //     // setActiveModal(true)
            // })
            
        if(userId){
            const data = {
                title: title,
                description: description,
                date: date
            }
            TutorialService.editTodo(data, userId)
                setActiveModal(true)
        }else{
            TutorialService.createTodo().then(() => {
                // setActiveModal(true)
            })
        }
        
    }
    const onChangeInputs = (key, value) => {
        handleChangeTodoObj(key, value) 
    };

    return (
        <div className={classes.modal}>
            <form onSubmit={handleSubmit(handlePostTodo, handleError)}>
                <div className={classes.title}>
                    <h3>Tasks</h3>
                    <AiFillCloseCircle onClick={()=> setActiveModal(true)}/>
                </div>

                <div>
                    <Input
                        label={"Title"}
                        name={"title"}
                        type={"text"}
                        onChange={(e) => onChangeInputs('title', e.target.value)}
                        value={todos?.title || ""}
                        errors={errors}
                        register={register}
                        options={registerOptions}
                    />
                </div>

                <div>
                    <Input
                        label={"Description"}
                        name={"description"}
                        type={"text"}
                        onChange={(e) => onChangeInputs('description', e.target.value)}
                        value={todos?.description || ""}
                        errors={errors}
                        register={register}
                        options={registerOptions}
                    />
                </div>

                <div>
                    <Input
                        label={"Data"}
                        name={"date"}
                        type={"date"}
                        onChange={(e) => onChangeInputs('date', e.target.value)}
                        value={todos?.date || ""}
                        errors={errors}
                        register={register}
                        options={registerOptions}
                    />
                </div>
                
                <Button type='submit' title="Submit"/>
            </form>
        </div>
    );
}

export default ModalForm;