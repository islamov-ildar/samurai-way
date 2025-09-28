import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItems/DialogsItem";
import Message from "./Messages/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsPageReducer";


const Dialogs = (props: any) => {
// debugger;
    const dialogsElements = props.state.dialogs.map((d: any) => DialogItem(d));

    const messageElements = props.state.messages.map((m: any) => Message(m));

    const inputHandle = (e: any) => {
        const newMessage = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(newMessage));
    }

    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
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
                <div className={s.flex}>
                    <textarea onChange={inputHandle} value={props.state.newMessageText} name="newMessage" id="" cols={30} rows={1}></textarea>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;