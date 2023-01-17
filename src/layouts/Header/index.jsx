import React from 'react'
import { Button } from '../../components';
import classes from './Header.module.scss';

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.container}>
                <div className={classes.inner}>
                    <div className={classes.logo}>CRYXXEN</div>
                    <div className={classes.item}>
                        <Button/>
                        <Button/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header 