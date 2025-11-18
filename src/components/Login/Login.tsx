import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Navigate} from "react-router";
import styles from "../common/FormsControls/FormControls.module.css"

const LoginForm = ({handleSubmit, error}: {handleSubmit: any; error: any}) => <div>
    <form onSubmit={ handleSubmit }>
        {createField('email', 'email', required, Input, {type: 'text'} )}
        {createField('password', 'password', required, Input, {type: 'password'} )}
        {createField(null, 'rememberMe', required, Input, {type: 'checkbox'}, 'Remember me' )}
        {error && <div className={styles.formSummaryError}>{error}</div>}
        <button>Login</button>
    </form>
</div>

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm) as any;

const Login = (props: any) => {
    const onSubmit = (formData: any) => {
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