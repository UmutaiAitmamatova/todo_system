import React from 'react';
import classes from './Button.module.scss';

const Button = ({ title, onSubmit }) => {
    return (
        <button onSubmit={onSubmit} className={classes.button}>{title}</button>
    )
}

export default Button;