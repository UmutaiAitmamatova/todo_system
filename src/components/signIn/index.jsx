import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'
import classes from './SignIn.module.scss'
import Button from "../common/Button";
import { ModalFormConfigs } from './configs';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import TutorialService from '../core/api';
import InputAuth from '../common/InputAuth';


const SignIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const {registerOptions} = ModalFormConfigs();

  const { register, handleSubmit, formState: { errors } } = useForm({
      mode: 'onBlur'
  });
  const handleError = (errors) => { console.log(errors); };

  const handleChangeStudObj = (key, value) => {
    setUser(old => ({
      ...old,
      [key]: value
    }))
  };
  const onChangeInputs = (key, value) => {
    handleChangeStudObj(key, value)
};

const handleApi = async () => {
  await TutorialService.singIn({
    username: user.username,
    password: user.password,
  })
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Successful authorization',
    showConfirmButton: false,
    timer: 1500
}).then(() => navigate('/')) 

}
  return (
    <div className={classes.sign_in}>
      <div className={classes.block}>
      <h2 className={classes.title}>Sign In</h2>
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

export default SignIn;