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
    },
    dialogsPage: {
        dialogs: dialogs,
        messages: messages,
    },
}