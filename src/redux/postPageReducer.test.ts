import postPageReducer, {addPostActionCreator, deletePostActionCreator} from "./postPageReducer";

const state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 3},
        {id: 2, message: 'It\'s my first post', likesCount: 6},
        {id: 3, message: 'Yo', likesCount: 12},
        {id: 4, message: 'KukarekuKukarekuKukareku123', likesCount: 51},
    ],
};

const action = addPostActionCreator("it-kamasutra222" );

it('new post should be incremented', () => {
    let newState = postPageReducer(state, action);
    expect(newState.posts.length).toBe(5);
})

it('new post should be t-kamasutra222', () => {
    let newState = postPageReducer(state, action);
    expect(newState.posts[4].message).toBe('it-kamasutra222');

})

it('after deleting length of messages should be decrement', () => {

    const action = deletePostActionCreator(1);

    let newState = postPageReducer(state, action);
    expect(newState.posts.length).toBe(3);

})

it("after deleting length of messages shouldn't be decrement if id is incorrect", () => {

    const action = deletePostActionCreator(19);

    let newState = postPageReducer(state, action);
    expect(newState.posts.length).toBe(4);

})