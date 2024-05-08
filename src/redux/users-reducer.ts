import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { ResultCodesEnum, usersAPI } from '../api/api';
import { updateObInArray } from '../utils/object-helpers';
import { UserType } from '../types/types';

export type followACType = ReturnType<typeof followSuccess>;
export type unfollowACType = ReturnType<typeof unfollowSuccess>;
export type setUsersACType = ReturnType<typeof setUsers>;
export type setCurrentPageACType = ReturnType<typeof setCurrentPage>;
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>;
export type toggleIsFetchingACType = ReturnType<typeof setToggleIsFetching>;
export type toggleFollowingProgressACType = ReturnType<
  typeof toggleFollowingProgress
>;
export type setFilerType = ReturnType<typeof setFiler>;

export type ActionType =
  | followACType
  | unfollowACType
  | setUsersACType
  | setCurrentPageACType
  | setTotalUsersCountACType
  | toggleIsFetchingACType
  | toggleFollowingProgressACType
  | setFilerType;

type initialStateType = typeof initialState;

export const initialState = {
  users: [] as Array<UserType>,
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 2 as number | string,
  isFetching: false,
  followingInProgress: [] as Array<number>, // array of users id
  searchOption: '' as string | undefined,
};

export const usersReducer = createSlice({
  name: 'users',
  initialState,
  reducers: {
    followSuccess(state: initialStateType, action: PayloadAction<number>) {
      state.users = updateObInArray(state.users, action.payload, 'id', {
        followed: true,
      });
    },
    unfollowSuccess(state: initialStateType, action: PayloadAction<number>) {
      state.users = updateObInArray(state.users, action.payload, 'id', {
        followed: false,
      });
    },
    setUsers(state: initialStateType, action: PayloadAction<Array<UserType>>) {
      state.users = action.payload;
    },
    setCurrentPage(
      state: initialStateType,
      action: PayloadAction<number | string>
    ) {
      state.currentPage = action.payload;
    },
    setTotalUsersCount(state: initialStateType, action: PayloadAction<number>) {
      state.totalUsersCount = action.payload;
    },
    setToggleIsFetching(
      state: initialStateType,
      action: PayloadAction<boolean>
    ) {
      state.isFetching = action.payload;
    },
    toggleFollowingProgress(
      state: initialStateType,
      action: PayloadAction<{ isFetching: boolean; userId: number }>
    ) {
      state.followingInProgress = action.payload.isFetching
        ? [...state.followingInProgress, action.payload.userId]
        : [
            ...state.followingInProgress.filter(
              (id) => id !== action.payload.userId
            ),
          ];
    },
    setFiler(
      state: initialStateType,
      action: PayloadAction<string | undefined>
    ) {
      state.searchOption = action.payload;
    },
  },
});

export const {
  followSuccess,
  unfollowSuccess,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setToggleIsFetching,
  toggleFollowingProgress,
  setFiler,
} = usersReducer.actions;

type requestUsersType = {
  currentPage: number | string;
  pageSize: number;
  term?: string;
  friends?: boolean;
};

export const requestUsers = createAsyncThunk(
  'users/requestUsers',
  async (requestData: requestUsersType, { dispatch }) => {
    dispatch(setToggleIsFetching(true));
    dispatch(setCurrentPage(requestData.currentPage));
    dispatch(setFiler(requestData.term));
    let data = await usersAPI.getUsers(
      requestData.currentPage,
      requestData.pageSize,
      requestData.term
    );
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setToggleIsFetching(false));
  }
);

const _followUnfollowFlow = async (
  id: number,
  dispatch: Dispatch<ActionType>,
  apiMethod: any,
  actionCreator: (userId: number) => followACType | unfollowACType
) => {
  dispatch(toggleFollowingProgress({ isFetching: true, userId: id }));
  let response = await apiMethod(id);
  if (response.data.resultCode === ResultCodesEnum.Success) {
    dispatch(actionCreator(id));
  }
  dispatch(toggleFollowingProgress({ isFetching: false, userId: id }));
};

export const follow = createAsyncThunk(
  'users/follow',
  async (id: number, { dispatch }) => {
    _followUnfollowFlow(
      id,
      dispatch,
      usersAPI.follow.bind(usersAPI),
      followSuccess
    );
  }
);

export const unfollow = createAsyncThunk(
  'users/unfollow',
  async (id: number, { dispatch }) => {
    _followUnfollowFlow(
      id,
      dispatch,
      usersAPI.unfollow.bind(usersAPI),
      unfollowSuccess
    );
  }
);

const usersActionsAndReducer = { usersReducer };

export default usersActionsAndReducer;
