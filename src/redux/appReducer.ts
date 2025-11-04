import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./authReducer";

const authActionTypes = {
    INITIALIZED_SUCCESS: 'INITIALIZED_SUCCESS',
};

export interface IState {
    initialized: boolean,
}

const initialState: IState = {
    initialized: true,
}

const appReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case authActionTypes.INITIALIZED_SUCCESS: {
            return {...state, initialized: true};
        }
        default:
            return state;
    }
}

const initializedSuccess = () => ({type: authActionTypes.INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch: any) => {
    const promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    })
};

export default appReducer;