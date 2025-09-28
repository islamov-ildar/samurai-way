import postPageReducer from "./postPageReducer";
import dialogsReducer from "./dialogsPageReducer";
import sidebarReducer from "./sidebarPageReducer";

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
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    subscribe(observer: (state: typeof this._state) => void) {
        this._callSubscriber = observer;
    },
    _callSubscriber(state: typeof this._state) {
        console.log('callSubscriber', state)
    },
    dispatch(action: any) {
        this._state.postPage = postPageReducer(this._state.postPage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

        console.log('dispatch', this._state)
    }
};

export default store