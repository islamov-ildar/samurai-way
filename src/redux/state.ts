export const store = {
    _state: {
        postPage: {
            newPostText: 'it-kamasutra',
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 3},
                {id: 2, message: 'It\'s my first post', likesCount: 6},
                {id: 3, message: 'Yo', likesCount: 12},
                {id: 4, message: 'KukarekuKukarekuKukareku123', likesCount: 51},
            ],
        },
        dialogsPage: {
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
    },
    getState() {
        // debugger

        return this._state
    },
    subscribe(observer: (state: typeof this._state) => void) {
        this._callSubscriber = observer;
    },
    _callSubscriber(state: typeof this._state) {
        console.log('callSubscriber', state)
    },
    dispatch(action: any) {
        if (action.type === actionTypes.ADD_NEW_POST) {
            const newPost = {
                id: this._state.postPage.posts.length + 1,
                message: this._state.postPage.newPostText,
                likesCount: 0
            }
            this._state.postPage.newPostText = '';
            this._state.postPage.posts.push(newPost);

            console.log('addNewPost', this._state);
            this._callSubscriber(this._state);
        } else if (action.type === actionTypes.UPDATE_NEW_POST_TEXT) {
            this._state.postPage.newPostText = action.newPostText
            console.log(this._state.postPage.newPostText)
            this._callSubscriber(this._state);
        } else if (action.type === actionTypes.SEND_MESSAGE) {
            const newMessage = this._state.dialogsPage.newMessageText;
            this._state.dialogsPage.messages.push({
                id: this._state.dialogsPage.messages.length + 1, message: newMessage
            });
            this._state.dialogsPage.newMessageText = '';
                this._callSubscriber(this._state);
        } else if (action.type === actionTypes.UPDATE_NEW_MESSAGE_TEXT) {
            console.log('UPDATE_NEW_MESSAGE_TEXT', action.payload)
            this._state.dialogsPage.newMessageText = action.payload;
            this._callSubscriber(this._state);
        }

        console.log('dispatch', this._state)
    }
};

export const actionTypes = {
    ADD_NEW_POST: 'ADD_NEW_POST',
    UPDATE_NEW_POST_TEXT: 'UPDATE_NEW_POST_TEXT',
    SEND_MESSAGE: 'SEND_MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT: 'UPDATE_NEW_MESSAGE_TEXT',
};

export const addPostActionCreator = () => ({type: actionTypes.ADD_NEW_POST});

export const updateNewPostTextPostActionCreator = (payload: string) => ({
    type: actionTypes.UPDATE_NEW_POST_TEXT,
    newPostText: payload
});

export const sendMessageActionCreator = () => ({type: actionTypes.SEND_MESSAGE});

export const updateNewMessageTextActionCreator = (payload: string) => ({
    type: actionTypes.UPDATE_NEW_MESSAGE_TEXT,
    payload: payload
});

export default store