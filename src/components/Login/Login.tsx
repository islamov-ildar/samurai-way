import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props: any) => <div>
    <form onSubmit={ props.handleSubmit }>
        <div>
            <Field type="text" name={'login'} placeholder="login" component="input"/>
        </div>
        <div>
            <Field type="password" name={'password'} placeholder="password" component="input" />
        </div>
        <div>
            <Field type="checkbox" name={'rememberMe'} component="input" /> Remember me
        </div>
        <button>Login</button>
    </form>
</div>

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm) as any;

const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        console.log('Form submitted:', formData);
    }
    return (<div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />

    </div>)
}

export default Login;