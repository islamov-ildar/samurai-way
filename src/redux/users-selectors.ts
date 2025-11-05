export const getUsersSelector = (state: any) => state.usersPage.users;

export const getPageSizeSelector = (state: any) => state.usersPage.pageSize;

export const getTotalUsersCountSelector = (state: any) => state.usersPage.totalUsersCount;

export const getCurrentPageSelector = (state: any) => state.usersPage.currentPage;

export const getIsFetchingSelector = (state: any) => state.usersPage.isFetching;

export const getFollowingInProgressSelector = (state: any) => state.usersPage.followingInProgress;


