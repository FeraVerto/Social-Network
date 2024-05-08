import { RootState } from './redux-store';
import { createSelector } from 'reselect';

export const getUsers = (state: RootState) => {
  return state.usersPage.users;
};

export const getUsersSelector = createSelector(getUsers, (users) => {
  return users;
});

export const getPageSize = (state: RootState) => {
  return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state: RootState) => {
  return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state: RootState) => {
  return state.usersPage.currentPage;
};

export const getIsFetching = (state: RootState) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state: RootState) => {
  return state.usersPage.followingInProgress;
};

export const getSearchOption = (state: RootState) => {
  return state.usersPage.searchOption;
};

const selectiors = {
  getUsers,
  getUsersSelector,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
  getSearchOption,
};

export default selectiors;
