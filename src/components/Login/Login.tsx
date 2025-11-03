import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Navigate} from "react-router";
import styles from "../common/FormsControls/FormControls.module.css"

const LoginForm = (props: any) => <div>
    <form onSubmit={ props.handleSubmit }>
        <div>
            <Field
                type="text"
                name={'email'}
                placeholder="email"
                component={Input}
                validate={[required]}/>
        </div>
        <div>
            <Field
                type="password"
                name={'password'}
                placeholder="password"
                component={Input}
                validate={[required]} />
        </div>
        <div>
            <Field type="checkbox" name={'rememberMe'} component="input" /> Remember me
        </div>
        {props.error && <div className={styles.formSummaryError}>{props.error}</div>}
        <button>Login</button>
    </form>
</div>

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm) as any;

const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        console.log('Form submitted:', formData);
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuth) return (<Navigate to={'/profile'}/>)

    return (<div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />

    </div>)
}

const mapStateToProps = (state: any) => state.authReducer;

export default connect(mapStateToProps, {login})(Login);