import classes from "./FormControls.module.css";


export const FormControl = ({input, meta, children, element, ...props}: any) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : '')}>
            <div>
                {
                    children
                }
            </div>
            {hasError && <span>{meta.error}</span>}
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