
const authActionTypes = {
    SET_USER_DATA: 'SET_USER_DATA',
    CLEAR_USER_DATA: 'CLEAR_USER_DATA',
};

export interface IState {
    userId: null | string;
    email: null | string;
    login: null | string;
    isFetching?: boolean,
    isAuth: boolean,
}

const initialState: IState = {
    userId: null,
    email: null,
    login: null,
    isAuth: true,
}

const authReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case authActionTypes.SET_USER_DATA: {
            console.log('authReducer', action.data)
            return {...state, ...action.data, isAuth: true};
        }
        // case authActionTypes.CLEAR_USER_DATA: {
        //     return {...state, users: state.users.map((user: User) => user.id === action.userId ? {...user, followed: false} : user)};
        // }
        default:
            return state;
    }
}

export const setAuthUserData = (userId: any, email: any, login: any) => ({type: authActionTypes.SET_USER_DATA, data: {userId, email, login}});

// export const clearUserData = (userId: number) => ({type: authActionTypes.CLEAR_USER_DATA, userId});

export default authReducer;