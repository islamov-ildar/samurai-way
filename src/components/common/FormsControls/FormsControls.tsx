import classes from "./FormControls.module.css";
import {Field} from "redux-form";
import {required} from "../../../utils/validators/validators";
import React from "react";


export const FormControl = ({input, meta: {touched, error}, children, element}: any) => {

    const hasError = touched && error;

    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : '')}>
            <div>
                {
                    children
                }
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}


export const Input = (props: any) => {
    const {input, meta, ...rest} = props;
    return <FormControl {...props}><input {...input} {...rest}/></FormControl>
}

export const TextArea = (props: any) => {
    const {input, meta, ...rest} = props;
    return <FormControl {...props}><textarea {...input} {...rest}/></FormControl>
}

export const createField = (placeholder: any, name: any, validators: any, components: any, props: any, text?: string) => <div>
    <span>
        <Field
            name={name}
            placeholder={placeholder}
            component={components}
            validate={[validators]}
            {...props}
        />
    </span>
    <span>{text}</span>
</div>
