import React, { useState } from 'react';
import classes from './ModalForm.module.scss';
import { AiFillCloseCircle } from 'react-icons/ai'
import Input from '../common/Input'
import { ModalFormConfigs } from './configs';
import { useForm } from 'react-hook-form';
import Button from '../common/Button';

const ModalForm = ({ setActiveModal }) => {
    const [tasks, setTasks] = useState({
        title: '',
        textarea: ''
    });

    const { registerOptions } = ModalFormConfigs();

    const { register, formState: { errors } } = useForm({
        mode: 'onBlur'
    });
    // const handleError = (errors) => { console.log(errors); };

    const handleChangeStudObj = (key, value) => {
        setTasks(old => ({
            ...old,
            [key]: value
        }))
    };
    const onChangeInputs = (key, value) => {
        handleChangeStudObj(key, value)
    };
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
                        onChange={(e) => onChangeInputs("title", e.target.value)}
                        value={tasks?.title || ""}
                        errors={errors}
                        register={register}
                        options={registerOptions}
                    />
                </div>

                <div>
                    {/* <label>
                        Essay: 
                        </label><br />
                        <textarea
                            name='textarea'
                            textarea={"textarea"}
                            value={tasks?.textarea || ""}
                            onChange={(e) => onChangeInputs("textarea", e.target.value)}
                            // options={registerOptions}
                        />
                    <small className={classes.text_danger}>
                        {errors?.textarea && errors.textarea.message}
                    </small> <br /> */}

                    <Input
                        label={"Textarea"}
                        name={"textarea"}
                        type={"textarea"}
                        onChange={(e) => onChangeInputs('textarea', e.target.value)}
                        value={tasks?.textarea || ""}
                        errors={errors}
                        register={register}
                        options={registerOptions}
                    />
                </div>
                
                <Button title="Submit"/>
            </form>
        </div>
    );
}

export default ModalForm;