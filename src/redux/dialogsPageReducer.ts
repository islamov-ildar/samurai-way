const dialogPageActionTypes = {
    SEND_MESSAGE: 'SEND_MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT: 'UPDATE_NEW_MESSAGE_TEXT',
};

const dialogsReducer = (state: any, action: any) => {
    switch (action.type) {
        case dialogPageActionTypes.SEND_MESSAGE:
            const newMessage = state.newMessageText;
            state.messages.push({
                id: state.messages.length + 1, message: newMessage
            });
            state.newMessageText = '';
            break;
        case dialogPageActionTypes.UPDATE_NEW_MESSAGE_TEXT:
            console.log('UPDATE_NEW_MESSAGE_TEXT', action.payload)
            state.newMessageText = action.payload;
            break;
        default:
            break;
    }

    return state;
}

export const sendMessageActionCreator = () => ({type: dialogPageActionTypes.SEND_MESSAGE});

export const updateNewMessageTextActionCreator = (payload: string) => ({
    type: dialogPageActionTypes.UPDATE_NEW_MESSAGE_TEXT,
    payload: payload
});

export default dialogsReducer;