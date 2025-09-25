
let rerenderEntireTree: any;

const postsData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 3},
    {id: 2, message: 'It\'s my first post', likesCount: 6},
    {id: 3, message: 'Yo', likesCount: 12},
    {id: 4, message: 'KukarekuKukarekuKukareku123', likesCount: 51},
]

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
    {id: 4, message: 'KukarekuKukarekuKukareku999'},
]

export const state = {
    postPage: {
        posts: postsData,
        newPostText: 'it-kamasutra'
    },
    dialogsPage: {
        dialogs: dialogs,
        messages: messages,
    },
}

export const addNewPost = () => {
    const newPost = {
        id: state.postPage.posts.length + 1,
        message: state.postPage.newPostText,
        likesCount: 0
    }
    state.postPage.newPostText = '';
    state.postPage.posts.push(newPost);

    console.log('addNewPost', state);
    rerenderEntireTree(state, addNewPost, updateNewPostText);

}

export const updateNewPostText = (newText: string) => {
    state.postPage.newPostText = newText
    console.log(state.postPage.newPostText)
    rerenderEntireTree(state, addNewPost, updateNewPostText);
}

export const subscribe = (observer: any) => {
    rerenderEntireTree = observer;
}