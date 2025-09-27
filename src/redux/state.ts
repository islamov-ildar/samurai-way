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
            ]
        }
    },
    getState() {
        // debugger

        return this._state
    },
    addNewPost() {
        const newPost = {
            id: this._state.postPage.posts.length + 1,
            message: this._state.postPage.newPostText,
            likesCount: 0
        }
        this._state.postPage.newPostText = '';
        this._state.postPage.posts.push(newPost);

        console.log('addNewPost', this._state);
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText: string) {
        this._state.postPage.newPostText = newText
        console.log(this._state.postPage.newPostText)
        this._callSubscriber(this._state);
    },
    subscribe(observer: (state: typeof this._state) => void ) {
        this._callSubscriber = observer;
    },
    _callSubscriber(state: typeof this._state){
        console.log('callSubscriber')
    }
};

export default store