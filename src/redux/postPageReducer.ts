import {profileAPI, usersAPI} from "../api/api";

const postPageActionTypes = {
    ADD_NEW_POST: 'ADD_NEW_POST',
    SET_USER_PROFILE: 'SET_USER_PROFILE',
    SET_STATUS: 'SET_STATUS',
};

const initialState = {
    newPostText: 'it-kamasutra',
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 3},
        {id: 2, message: 'It\'s my first post', likesCount: 6},
        {id: 3, message: 'Yo', likesCount: 12},
        {id: 4, message: 'KukarekuKukarekuKukareku123', likesCount: 51},
    ],
    profile: null,
    status: ''
}

const postPageReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case postPageActionTypes.ADD_NEW_POST: {
            const newPost = {
                id: state.posts.length + 1,
                message: action.newPostText,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost]};
        }
        case postPageActionTypes.SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        case postPageActionTypes.SET_STATUS: {
            return {...state, status: action.status};
        }
        default:
            return state;
    }
}


export const addPostActionCreator = (payload: string) => ({type: postPageActionTypes.ADD_NEW_POST, newPostText: payload});

export const setUserProfile = (profile: any) => ({type: postPageActionTypes.SET_USER_PROFILE, profile});

export const getUserProfile = (userId: any) => (dispatch: any) => {
    usersAPI.getProfile(userId).then((res: any) => {
        dispatch(setUserProfile(res.data))
    })
};

export const getUserStatus = (payload: string) => (dispatch: any) => {
    profileAPI.getStatus(payload).then((res: any) => {
        dispatch(setStatus(res.data))
    })
};

export const updateUserStatus = (payload: string) => (dispatch: any) => {
    profileAPI.updateStatus(payload).then((res: any) => {
        if (res.data.resultCode === 0) {
            dispatch(setStatus(payload))
        }
    })
};

export const setStatus = (status: any) => ({type: postPageActionTypes.SET_STATUS, status});

export default postPageReducer;