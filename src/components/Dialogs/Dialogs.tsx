import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItems/DialogsItem";
import Message from "./Messages/Message";
import {Navigate} from "react-router";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props: any) => {

    const dialogsElements = props.dialogsPage.dialogs.map((d: any) => DialogItem(d));

    const messageElements = props.dialogsPage.messages.map((m: any) => Message(m));

    if (!props.isAuth) return <Navigate to={'/login'}/>


    const onSubmit = (formData: any) => {
        console.log('Form submitted:', formData);
        props.sendMessage(formData.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                <div className={s.messages}>
                    {messageElements}
                </div>
                <AddMessageReduxForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.flex}>
            <Field type="text" name={'newMessageBody'} component="textarea" placeholder="Enter your message text" />
            <button>Send</button>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: 'addMessage'})(AddMessageForm) as any;

export default Dialogs;