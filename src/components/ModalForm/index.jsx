import React, { useEffect, useState } from 'react';
import classes from './ModalForm.module.scss';
import { AiFillCloseCircle } from 'react-icons/ai'
import Input from '../common/Input'
import { ModalFormConfigs } from './configs';
import { useForm } from 'react-hook-form';
import Button from '../common/Button';
import TutorialService from '../core/api';

const ModalForm = ({ setActiveModal, handleChangeTodoObj, todos, setEdit, edit, data }) => {
    let userId = localStorage.getItem('userId');
    // const newCommentAnswer = {
    //     user: localStorage.getItem('userId'),
    //     // title: todos.title,
    //     // description:todos.description,
    //     // date: todos.date
    // };

    const onChangeInputs = (e, key, value) => {
        // console.log(e)
        let toEdit = {
            ...editTodo,
            [key] : value
        }
        setEditTodo(toEdit)
        handleChangeTodoObj(key, value)
    };

    const { registerOptions } = ModalFormConfigs();
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur'
    });
    const handleError = (errors) => { console.log(errors); };
    const handlePostTodo = () => {
            TutorialService.createTodo(todos).then(() => {
            })
    }
    const handlePatchTodo = () => {
        TutorialService.editTodo(editTodo.id, editTodo).then(() => {
        })
    }
    
    
    const [editTodo, setEditTodo] = useState(data)
    

    console.log(editTodo, '========================')



    // console.log(data)
    return (
        <div className={classes.modal}>
            <form onSubmit={handleSubmit( (edit ? handlePatchTodo : handlePostTodo), handleError)}>
                <div className={classes.title}>
                    <h3>Tasks</h3>
                    <AiFillCloseCircle onClick={()=> {edit ? setEdit(false) : setActiveModal(true)}}/>
                </div>

                <div>
                    <Input
                        label={"Title"}
                        name={"title"}
                        type={"text"}
                        onChange={(e) => onChangeInputs(e, 'title', e.target.value)}
                        value={edit ? editTodo.title : null}
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
                        onChange={(e) => onChangeInputs(e, 'description', e.target.value)}
                        value={edit ? editTodo.description : null}
                        errors={errors}
                        register={register}
                        options={registerOptions}
                    />
                </div>

                <div>
                    <Input
                        label={"Date"}
                        name={"date"}
                        type={"date"}
                        onChange={(e) => onChangeInputs(e, 'date', e.target.value)}
                        value={edit ? editTodo.date : null}
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