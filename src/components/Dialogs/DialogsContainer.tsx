import React from "react";
import Dialogs from "./Dialogs";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsPageReducer";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props: any) => {


    return (<StoreContext.Consumer>
        {
            (store) => {

                const state = store?.getState().dialogsPage;

                const inputHandle = (newMessage: string) => {
                    store?.dispatch(updateNewMessageTextActionCreator(newMessage));
                }

                const sendMessage = () => {
                    store?.dispatch(sendMessageActionCreator());
                }

                return (<Dialogs
                    sendMessage={sendMessage}
                    inputHandle={inputHandle}
                    state={state}
                />)
            }
        }
        </StoreContext.Consumer>)
}

export default DialogsContainer;