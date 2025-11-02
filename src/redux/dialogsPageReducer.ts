const dialogPageActionTypes = {
    SEND_MESSAGE: 'SEND_MESSAGE',
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
}

const dialogsReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case dialogPageActionTypes.SEND_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: state.messages.length + 1, message: action.payload}],
            };
        }
        default:
            return state;
    }
}

export const sendMessageActionCreator = (newMessage: string) => ({type: dialogPageActionTypes.SEND_MESSAGE, payload: newMessage});

export default dialogsReducer;