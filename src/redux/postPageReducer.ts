
const postPageActionTypes = {
    ADD_NEW_POST: 'ADD_NEW_POST',
    UPDATE_NEW_POST_TEXT: 'UPDATE_NEW_POST_TEXT',
};

const initialState = {
    newPostText: 'it-kamasutra',
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 3},
        {id: 2, message: 'It\'s my first post', likesCount: 6},
        {id: 3, message: 'Yo', likesCount: 12},
        {id: 4, message: 'KukarekuKukarekuKukareku123', likesCount: 51},
    ],
}

const postPageReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case postPageActionTypes.ADD_NEW_POST: {
            const newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0
            }
            const stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';

            console.log('addNewPost', state);
            return stateCopy;
        }
        case postPageActionTypes.UPDATE_NEW_POST_TEXT: {
            const stateCopy = {...state};
            stateCopy.newPostText = action.newPostText;
            console.log(stateCopy.newPostText);
            return stateCopy;
        }
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: postPageActionTypes.ADD_NEW_POST});

export const updateNewPostTextPostActionCreator = (payload: string) => ({
    type: postPageActionTypes.UPDATE_NEW_POST_TEXT,
    newPostText: payload
});

export default postPageReducer;