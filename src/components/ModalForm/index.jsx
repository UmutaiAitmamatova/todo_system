import React, { useEffect, useState } from 'react';
import classes from './ModalForm.module.scss';
import { AiFillCloseCircle } from 'react-icons/ai'
import Input from '../common/Input'
import { ModalFormConfigs } from './configs';
import { useForm } from 'react-hook-form';
import Button from '../common/Button';
import TutorialService from '../core/api';
import Swal from 'sweetalert2';

const ModalForm = ({ getAll, setActiveModal, handleChangeTodoObj, todos, setEdit, edit, data, getAllTodo, todo }) => {
    const [editTodo, setEditTodo] = useState(data)

    // useEffect(() => {
        
    // }, [todo]);
    const onChangeInputs = (e, key, value) => {
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
                setActiveModal(true)
                getAll()
            })
            Swal.fire(
                'Successfully added new student!',
                '',
                'success'
            )
    }

    const handlePatchTodo = () => {
        TutorialService.editTodo(editTodo.id, editTodo).then(async () => {
            setEdit(false)
            await getAllTodo()
        })
        Swal.fire(
            'Successfully updated student!',
            '',
            'success'
        )
    }

    return (
        <div className={classes.modal}>
            <form onSubmit={handleSubmit((edit ? handlePatchTodo : handlePostTodo), handleError)}>
                <div className={classes.title}>
                    <h3>Tasks</h3>
                    <AiFillCloseCircle onClick={()=> {edit ? setEdit(false) : setActiveModal(false)}}/>
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