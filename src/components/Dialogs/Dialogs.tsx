import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItems/DialogsItem";
import Message from "./Messages/Message";

const Dialogs = (props: any) => {
    // debugger;
    console.log(props);
    const dialogsElements = props.dialogsPage.dialogs.map((d: any) => DialogItem(d));

    const messageElements = props.dialogsPage.messages.map((m: any) => Message(m));

    const inputHandle = (e: any) => {
        const newMessage = e.target.value;
        props.inputHandle(newMessage);
    }

    const sendMessage = () => {
        props.sendMessage();
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
                    <textarea onChange={inputHandle} value={props.dialogsPage.newMessageText} name="newMessage" id="" cols={30} rows={1}></textarea>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;