import React from "react";
import Dialogs from "./Dialogs";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsPageReducer";


const DialogsContainer = (props: any) => {
    // debugger;

    const state = props.store.getState().dialogsPage;

    const inputHandle = (newMessage: string) => {
        props.store.dispatch(updateNewMessageTextActionCreator(newMessage));
    }

    const sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    return (
        <Dialogs
            sendMessage={sendMessage}
            inputHandle={inputHandle}
            state={state}
        />
    )
}

export default DialogsContainer;