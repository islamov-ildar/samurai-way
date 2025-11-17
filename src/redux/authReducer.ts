import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

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
    isAuth: false,
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

const setAuthUserData = (userId: any, email: any, login: any, isAuth: boolean) => ({
    type: authActionTypes.SET_USER_DATA,
    data: {userId, email, login, isAuth}
});

export const getAuthUserData = () => async (dispatch: any) => {

    const res = await authAPI.authMe();

    if (res && res.data.resultCode === 0) {
        const {id, email, login} = res.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    } else {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export const login = (email: any, password: any, rememberMe: any) => async (dispatch: any) => {
    const res = await authAPI.authLogin(email, password, rememberMe)

    if (res.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        const errorMessage = res.data.messages.length > 0 ? res.data.messages[0] : "Common error";
        dispatch(stopSubmit("login", {_error: errorMessage}));
    }
};

export const logout = () => async (dispatch: any) => {
    const res = await authAPI.authLogout()

    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export default authReducer;