import React, { useEffect, useState } from 'react';
import classes from './ModalForm.module.scss';
import { AiFillCloseCircle } from 'react-icons/ai'
import Input from '../common/Input'
import { ModalFormConfigs } from './configs';
import { useForm } from 'react-hook-form';
import Button from '../common/Button';
import TutorialDataService from '../core/api'

const ModalForm = ({ setActiveModal, handleInputChange, getTodos, tasks }) => {
    const [todo, setTodo] = useState({
        title: '',
        description: '',
        date: '',
        user: ''
    });

    const newCommentAnswer = {
        user: todo.user,
        title: todo.title,
        description:todo.description,
        date: todo.date
      };

    const onChange = (e) => {
        const { name, value } = e.target;

        setTodo((previousValue) => {
            return {
                ...previousValue,
                [name]: value,
            };
        });
    };


    // useEffect(() => {
    //     TutorialDataService.getAllTodo(tasks)
    //             .then(res => setTodo(res.data))
    // }, [])

    const { registerOptions } = ModalFormConfigs();

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur'
    });


    const handlePostTodo = () => {
        TutorialDataService.createTodo(newCommentAnswer).then(() => {
            console.log('data', newCommentAnswer);
        })
    }

    return (
        <div className={classes.modal}>
            <form onSubmit={handleSubmit(handlePostTodo)}>
                <div className={classes.title}>
                    <h3>Tasks</h3>
                    <AiFillCloseCircle onClick={() => setActiveModal(true)} />
                </div>

                <div>
                    <Input
                        label={"Title"}
                        name={"title"}
                        type={"text"}
                        onChange={(e) => onChange(e)}
                        value={todo.title}
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
                        onChange={(e) => onChange(e)}
                        value={todo.description}
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
                        onChange={(e) => onChange(e)}
                        value={todo.date}
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