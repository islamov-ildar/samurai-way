const dialogPageActionTypes = {
    SEND_MESSAGE: 'SEND_MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT: 'UPDATE_NEW_MESSAGE_TEXT',
};

const initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Kolya'},
        {id: 4, name: 'Kukareku'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'KukarekuKukarekuKukareku999'},
    ],
    newMessageText: '',
}

const dialogsReducer = (state: any = initialState, action: any) => {


    switch (action.type) {
        case dialogPageActionTypes.SEND_MESSAGE: {
            return {...state,
                    messages: [...state.messages, {id: state.messages.length + 1, message: state.newMessageText}]};
        }
        case dialogPageActionTypes.UPDATE_NEW_MESSAGE_TEXT: {
            return {...state, newMessageText: action.payload};
        }
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: dialogPageActionTypes.SEND_MESSAGE});

export const updateNewMessageTextActionCreator = (payload: string) => ({
    type: dialogPageActionTypes.UPDATE_NEW_MESSAGE_TEXT,
    payload: payload
});

export default dialogsReducer;