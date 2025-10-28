import {authAPI} from "../api/api";

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
            return {...state, ...action.data};
        }
        default:
            return state;
    }
}

const setAuthUserData = (userId: any, email: any, login: any, isAuth: boolean) => ({type: authActionTypes.SET_USER_DATA, data: {userId, email, login, isAuth}});

export const getAuthUserData = () => (dispatch: any) => {
    authAPI.authMe().then((res: any) => {
        console.log('getAuthUserData 123', res.data);
        if (res.data.resultCode === 0) {
            console.log('getAuthUserData 456', res.data);
            const {id, email, login} = res.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        } else {
            console.log('getAuthUserData 789', res.data);
            dispatch(setAuthUserData(null, null, null, false));
        }
    })
};

export default authReducer;