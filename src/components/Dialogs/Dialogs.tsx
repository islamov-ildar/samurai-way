import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItems/DialogsItem";
import Message from "./Messages/Message";


const Dialogs = (props: any) => {
// debugger;
    const dialogsElements = props.state.dialogs.map((d: any) => DialogItem(d));

    const messageElements = props.state.messages.map((m: any) => Message(m));

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
                    <textarea name="newMessage" id="" cols={30} rows={1}></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;