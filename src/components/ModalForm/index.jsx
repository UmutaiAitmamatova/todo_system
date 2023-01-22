import React, { useState } from 'react';
import classes from './ModalForm.module.scss';
import { AiFillCloseCircle } from 'react-icons/ai'
import Input from '../common/Input'
import { ModalFormConfigs } from './configs';
import { useForm } from 'react-hook-form';
import Button from '../common/Button';

const ModalForm = ({ setActiveModal, valueDescription, handleInputChange, valueTitle, saveTutorial,valueData }) => {
    // const [tasks, setTasks] = useState({
    //     title: '',
    //     textarea: ''
    // });

    const { registerOptions } = ModalFormConfigs();

    const { register, formState: { errors } } = useForm({
        mode: 'onBlur'
    });
    // const handleError = (errors) => { console.log(errors); };

    // const handleChangeStudObj = (key, value) => {
    //     setTasks(old => ({
    //         ...old,
    //         [key]: value
    //     }))
    // };
    // const onChangeInputs = (key, value) => {
    //     handleChangeStudObj(key, value)
    // };
    return (
        <div className={classes.modal}>
            <form>
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
                        type={"text"}
                        onChange={handleInputChange}
                        value={valueData}
                        errors={errors}
                        register={register}
                        options={registerOptions}
                    />
                </div>
                
                <Button onClick={saveTutorial(console.log('hell'))} title="Submit"/>
            </form>
        </div>
    );
}

export default ModalForm;