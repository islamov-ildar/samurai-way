
const usersPageActionTypes = {
    FOLLOW: 'FOLLOW',
    UNFOLLOW: 'UNFOLLOW',
    SET_USERS: 'SET_USERS',
    SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
};

interface User {
    id: number;
    followed: boolean;
    photoUrl: string;
    fullName: string;
    status: string;
    location: {
        city: string;
        country: string;
    }
}

export interface IUserInitialState {
    users: User[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
}

const initialState: IUserInitialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 2,
}

const usersPageReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case usersPageActionTypes.FOLLOW: {
            return {...state, users: state.users.map((user: User) => user.id === action.userId ? {...user, followed: true} : user)};
        }
        case usersPageActionTypes.UNFOLLOW: {
            return {...state, users: state.users.map((user: User) => user.id === action.userId ? {...user, followed: false} : user)};
        }
        case usersPageActionTypes.SET_USERS: {
            return {...state, users: [...state.users, ...action.users]};
        }
        default:
            return state;
    }
}

export const followAC = (userId: number) => ({type: usersPageActionTypes.FOLLOW, userId});

export const unfollowAC = (userId: number) => ({type: usersPageActionTypes.UNFOLLOW, userId});

export const setUsersAC = (users: User[]) => ({type: usersPageActionTypes.SET_USERS, users});

export default usersPageReducer;