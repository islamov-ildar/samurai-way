import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItems/DialogsItem";
import Message from "./Messages/Message";

const dialogs = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Kolya'},
    {id: 4, name: 'Kukareku'},
]

const messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'KukarekuKukarekuKukareku'},
]

const dialogsElements = dialogs.map(d => DialogItem(d));

const messageElements = messages.map(m => Message(m));

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messageElements }
            </div>
        </div>
    )
}

export default Dialogs;