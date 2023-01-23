import React from 'react';
import classes from './Button.module.scss';

const Button = ({ title, onSubmit, onClick, setActiveModal, type }) => {
    return (
        <button type={type} onClick={onClick} onSubmit={onSubmit} className={classes.button}>{title}</button>
    )
}

export default Button;