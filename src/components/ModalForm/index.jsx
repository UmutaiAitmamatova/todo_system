import React from 'react';
import classes from './ModalForm.module.scss';
import { AiFillCloseCircle } from 'react-icons/ai'
import Input from '../common/Input'
import { ModalFormConfigs } from './configs';
import { useForm } from 'react-hook-form';
import Button from '../common/Button';
import TutorialService from '../core/api';
import Swal from 'sweetalert2';

const ModalForm = ({ setActiveModal, setEdit, edit, data, getAllTodo }) => {

    const { registerOptions } = ModalFormConfigs();
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur'
    });
    const handleError = (errors) => { console.log(errors); };

    const handlePostTodo = (newData) => {
        const userId = localStorage.getItem('userId')
        TutorialService.createTodo({ ...newData, user: userId }).then(() => {
            setActiveModal(false)
            getAllTodo()
        })
        Swal.fire(
            'Successfully added new student!',
            '',
            'success'
        )
    }

    const handlePatchTodo = (newData) => {
        const userId = localStorage.getItem('userId')
        TutorialService.editTodo(data.id, { ...newData, user: userId })
            .then(async () => {
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
                    <AiFillCloseCircle onClick={() => { edit ? setEdit(false) : setActiveModal(false) }} />
                </div>

                <div>
                    <Input
                        label={"Title"}
                        name={"title"}
                        type={"text"}
                        defaultValue={data ? data.title : ''}
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
                        defaultValue={data ? data.description : ''}
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
                        defaultValue={data ? data.date : ''}
                        errors={errors}
                        register={register}
                        options={registerOptions}
                    />
                </div>

                <Button type='submit' title="Submit" />
            </form>
        </div>
    );
}

export default ModalForm;