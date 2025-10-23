
const usersPageActionTypes = {
    FOLLOW: 'FOLLOW',
    UNFOLLOW: 'UNFOLLOW',
    SET_USERS: 'SET_USERS',
    SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT: 'SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FETCHING: 'TOGGLE_IS_FETCHING',
    TOGGLE_IS_FOLLOWING_PROGRESS: 'TOGGLE_IS_FOLLOWING_PROGRESS',
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
    follow?: () => {},
    unfollow?: () => {},
    toggleIsFetching?: () => {},
    isFetching: boolean;
    followingInProgress: [];
    toggleFollowingProgress?:  () => {},
}

const initialState: IUserInitialState = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
            return {...state, users: [...action.users]};
        }
        case usersPageActionTypes.SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage};
        }
        case usersPageActionTypes.SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount};
        }
        case usersPageActionTypes.TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching};
        }
        case usersPageActionTypes.TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {...state, followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter((id: any) => id !== action.userId)};
        }

        default:
            return state;
    }
}

export const follow = (userId: number) => ({type: usersPageActionTypes.FOLLOW, userId});

export const unfollow = (userId: number) => ({type: usersPageActionTypes.UNFOLLOW, userId});

export const setUsers = (users: User[]) => ({type: usersPageActionTypes.SET_USERS, users});

export const setCurrentPage = (currentPage: number) => ({type: usersPageActionTypes.SET_CURRENT_PAGE, currentPage});

export const setTotalUsersCount = (totalUsersCount: number) => ({type: usersPageActionTypes.SET_TOTAL_USERS_COUNT, totalUsersCount});

export const toggleIsFetching = (isFetching: boolean) => ({type: usersPageActionTypes.TOGGLE_IS_FETCHING, isFetching});

export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({type: usersPageActionTypes.TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export default usersPageReducer;