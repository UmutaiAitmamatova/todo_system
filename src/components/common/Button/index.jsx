import React from 'react';
import classes from './Button.module.scss';

const Button = ({ title }) => {
    return (
        <div className={classes.button}>{title}Click me!</div>
    )
}

export default Button;