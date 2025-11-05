import {createSelector} from "reselect";
import {User} from "./usersPageReducer";

export const getUsers = (state: any) => state.usersPage.users;

// export const getUsersSelector = () => getUsers.filter(()=>true);

export const getPageSizeSelector = (state: any) => state.usersPage.pageSize;

export const getTotalUsersCountSelector = (state: any) => state.usersPage.totalUsersCount;

export const getCurrentPageSelector = (state: any) => state.usersPage.currentPage;

export const getIsFetchingSelector = (state: any) => state.usersPage.isFetching;

export const getFollowingInProgressSelector = (state: any) => state.usersPage.followingInProgress;


export const getUsersSuperSelector = createSelector(getUsers, (users: any) => {
   return users.filter(()=>true);
});