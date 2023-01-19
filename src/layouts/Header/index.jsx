import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../../components';
import classes from './Header.module.scss';

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.container}>
                <div className={classes.inner}>
                    <Link to='/'><div className={classes.logo}>CRYXXEN</div></Link>
                    <div className={classes.item}>
                        <Link to='/admin'><Button title="admin"/></Link>
                        <Button title="Log out"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header 