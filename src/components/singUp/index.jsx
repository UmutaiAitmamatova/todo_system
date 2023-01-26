import React, {useState} from 'react';
import classes from './SignUp.module.scss'
import Input from "../common/Input";
import Button from "../common/Button";
import { ModalFormConfigs } from './configs';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import TutorialService from '../core/api';
import InputAuth from '../common/InputAuth';

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const {registerOptions} = ModalFormConfigs();

  const { register, handleSubmit, formState: { errors } } = useForm({
      mode: 'onBlur'
  });
  const handleError = (errors) => { console.log(errors); };

  const handleChangeUser = (key, value) => {
    setUser(old => ({
      ...old,
      [key]: value
    }))
  };
  const onChangeInputs = (key, value) => {
    handleChangeUser(key, value)
};



const handleApi = async () => {
  TutorialService.singUp({
    username: user.username,
    email: user.email,
    password: user.password,
  })
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'you have successfully registered',
    showConfirmButton: false,
    timer: 1500
}).then(() => navigate('/')) 
  // console.log('SignUp');
}

  return (
    <div className={classes.sign_up}>
      
      <div className={classes.block}>

        <h2 className={classes.title}>Sign Up</h2>
        <form onSubmit={handleSubmit(handleApi, handleError)}>
          <div>
          <InputAuth
            label={"userName"}
            name={"username"}
            type={"string"}
            onChange={(e) => onChangeInputs('username', e.target.value)}
            value={user?.username || ""}
            errors={errors}
            register={register}
            options={registerOptions}
          />
          </div>
          <div>
          <InputAuth
            label={"Email"}
            name={"email"}
            type={"email"}
            onChange={(e) => onChangeInputs('email', e.target.value)}
            value={user?.email || ""}
            errors={errors}
            register={register}
            options={registerOptions}
          />
          </div>
          <div>
          <InputAuth
            label={"Password"}
            name={"password"}
            type={"password"}
            onChange={(e) => onChangeInputs('password', e.target.value)}
            value={user?.password || ""}
            errors={errors}
            register={register}
            options={registerOptions}
          />
          </div>
          <Button type="Submit" title="Submit"/>
        </form>
      </div>
      
    </div>
  )
}

export default SignUp;