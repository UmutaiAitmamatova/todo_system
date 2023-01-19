import React, {useState} from 'react';
import classes from './SignIn.module.scss'
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { ModalFormConfigs } from './configs';
import { useForm } from 'react-hook-form';

const SignIn = () => {
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

  const handleChangeStudObj = (key, value) => {
    setUser(old => ({
      ...old,
      [key]: value
    }))
  };
  const onChangeInputs = (key, value) => {
    handleChangeStudObj(key, value)
};
  return (
    <div className={classes.sign_in}>
      <div className={classes.block}>
      <h2 className={classes.title}>Sign In</h2>
      <form onSubmit={console.log('sign In')}>
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