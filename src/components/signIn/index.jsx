import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import classes from './SignIn.module.scss'
import Input from "../common/Input";
import Button from "../common/Button";
import { ModalFormConfigs } from './configs';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';


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
  axios.post('http://todolistapi.pythonanywhere.com/api/token/', {
    username: user.username,
    password: user.password,
  })
  .then(res => {
    console.log(res.data);
    localStorage.setItem('accessToken', res.data.access)
    localStorage.setItem('refreshToken', res.data.refresh)
    localStorage.setItem('userId', res.data.id)
    console.log('refresh', localStorage.setItem('userId', res.data.id));
  })
  .catch(err => {
    console.log(err);
  })
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Successful authorization',
    showConfirmButton: false,
    timer: 1500
}).then(() => navigate('/')) 
  // console.log('SignIn');
}
  return (
    <div className={classes.sign_in}>
      <div className={classes.block}>
      <h2 className={classes.title}>Sign In</h2>
      <form onSubmit={handleSubmit(handleApi, handleError)}>
      <div>
          <Input
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
      {/* <Link to="/SignUp"><div>Sign Up</div></Link> */}

    </div>
  )
}

export default SignIn;