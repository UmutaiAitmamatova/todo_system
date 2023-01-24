import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import classes from './Header.module.scss';
import TutorialService from '../../components/core/api';


const Header = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] =  useState({
        id: '',
        username: '',
        email: '',
        password: ''
    });
    console.log('userUNFO', TutorialService.getUserInfo(userInfo));

    const logOut = () => {
        localStorage.removeItem('accessToken')
        // const refresh = localStorage.removeItem('refreshToken')
        // TutorialService.logOut(refresh)
        localStorage.clear()
        console.log('log out');
        navigate('/auth')
        // window.location.reload();
    }
    return (
        <div className={classes.header}>
            <div className={classes.container}>
                <div className={classes.inner}>
                    <Link to='/'><div className={classes.logo}>CRYXXEN</div></Link>
                    <div className={classes.item}>
                        <Link to='/admin'><Button title="admin"/></Link>
                        <Button onClick={logOut} title="Log out"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header 