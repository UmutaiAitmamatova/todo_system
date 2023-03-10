import React, { useState } from "react";
import classes from "./Input.module.scss";

export default function Input({
    label,
    errors,
    register,
    defaultValue,
    options,
    name,
    type,
}) {
    const [value, setValue] = useState(defaultValue)
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
                    defaultValue={defaultValue}
                    onChange={(e) => {setValue(e.target.value)}}
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