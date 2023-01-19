import React, {useState} from 'react';
import classes from './SignUp.module.scss'
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { ModalFormConfigs } from './configs';
import { useForm } from 'react-hook-form';
import { authUser } from '../../components/core/api';

const SignUp = () => {
  const [user, setUser] = useState({
    userName: '',
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

const handleModaleChange = (userName, email, password) => {
  authUser(userName, email, password)
  console.log('user', user);
}

  return (
    <div className={classes.sign_up}>
      
      <div className={classes.block}>
        <h2 className={classes.title}>Sign Up</h2>
        <form onSubmit={handleSubmit(handleModaleChange, handleError)}>
          <div>
          <Input
            label={"userName"}
            name={"userName"}
            type={"string"}
            onChange={(e) => onChangeInputs('userName', e.target.value)}
            value={user?.userName || ""}
            errors={errors}
            register={register}
            options={registerOptions}
          />
          </div>
          <div>
          <Input
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
          <Input
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