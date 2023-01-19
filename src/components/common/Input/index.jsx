import React from "react";
import classes from "./Input.module.scss";


export default function Input({
    label,
    errors,
    register,
    onChange,
    value,
    options,
    name,
    type,
}) {
    const renderLabel = () => {
        return (
            <>
                <label>{label}</label> <br />
            </>
        );
    };

    const renderError = () => {
        return (
            <small className={classes.text_danger}>
                {errors[name] && errors[name].message}
            </small>
        );
    };

    const renderMainInput = () => {
        return (
            <>
                <input
                    type={type}
                    name={name}
                    {...register(name, options[name])}
                    value={value}
                    onChange={onChange}
                />
                <br />
            </>
        );
    };
    return (
        <>
            {label && renderLabel()}
            {renderMainInput()}
            {errors && renderError()}
        </>
    );
}
