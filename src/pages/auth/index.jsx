import React from "react";
import SignIn from '../../components/signIn';
import SignUp from '../../components/singUp';
import classes from './Auth.module.scss';

const Auth = () => {
    return (
        <div className={classes.auth}>
            <div className={classes.container}>
                <div className={classes.block}>
                    <SignIn />
                    <SignUp />
                </div>
            </div>
        </div>
    );
};

export default Auth;
