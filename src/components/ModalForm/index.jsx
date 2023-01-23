import React, { useState } from 'react';
import classes from './ModalForm.module.scss';
import { AiFillCloseCircle } from 'react-icons/ai'
import Input from '../common/Input'
import { ModalFormConfigs } from './configs';
import { useForm } from 'react-hook-form';
import Button from '../common/Button';
import TutorialDataService from '../core/api'

const ModalForm = ({ setActiveModal, valueDescription, handleInputChange, valueTitle, saveTutorial,valueData, getTodo }) => {

    const { registerOptions } = ModalFormConfigs();

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur'
    });


    const handlePostTodo = (data) => {
        TutorialDataService.createTodo(data, getTodo).then(() => {
            console.log('data', data);
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
                        onChange={handleInputChange}
                        value={valueTitle}
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
                        onChange={handleInputChange}
                        value={valueDescription}
                        errors={errors}
                        register={register}
                        options={registerOptions}
                    />
                </div>

                <div>
                    <Input
                        label={"Data"}
                        name={"data"}
                        type={"data"}
                        onChange={handleInputChange}
                        value={valueData}
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