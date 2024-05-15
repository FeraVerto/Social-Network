import { profileAPI, ResultCodesEnum, usersAPI } from '../api/api';
import { stopSubmit } from 'redux-form';
import { photoType } from './auth-reducer';
import { PostType, ProfileType } from '../types/types';
import { ThunkAction } from 'redux-thunk';
import store, { RootState } from './redux-store';
import { FormAction } from 'redux-form/lib/actions';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  posts: Array<PostType>;
  profile: ProfileType | null;
  status: string;
};

const initialState: initialStateType = {
  posts: [
    { id: 1, message: 'Сегодня был чудесный день!', like: 25 },
    { id: 2, message: 'Я покушал и поспал', like: 40 },
    { id: 3, message: 'Но не выспался', like: 1 },
  ],
  profile: null,
  status: '',
};

const profileReducer = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addPost(state: initialStateType, action: PayloadAction<string>) {
      const newPost = {
        id: state.posts.length + 1,
        message: action.payload,
        like: 0,
      };
      state.posts.unshift(newPost);
    },
    setUserProfile(
      state: initialStateType,
      action: PayloadAction<ProfileType>
    ) {
      state.profile = action.payload;
    },
    setUserStatus(state: initialStateType, action: PayloadAction<string>) {
      state.status = action.payload;
    },
    saveUserPhoto(state: initialStateType, action: PayloadAction<photoType>) {
      if (state.profile) {
        state.profile.photos = action.payload;
      }
    },
    updateUserStatus(state: initialStateType, action: PayloadAction<string>) {
      state.status = action.payload;
    },
  },
});

export const {
  addPost,
  setUserProfile,
  setUserStatus,
  saveUserPhoto,
  updateUserStatus,
} = profileReducer.actions;

const getUserProfile = createAsyncThunk(
  'profile/getUserProfile',
  async (userId: string, { dispatch, getState }) => {
    let data = await usersAPI.getProfile(userId);
    console.log();
    dispatch(setUserProfile(data));
  }
);

const getStatus = createAsyncThunk(
  'profile/getStatus',
  async (userId: string, { dispatch }) => {
    let res = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(res.data));
  }
);

const updateStatus = createAsyncThunk(
  'profile/updateStatus',
  async (status: string, { dispatch }) => {
    let res = await profileAPI.updateStatus(status);
    if (res.data.resultCode === ResultCodesEnum.Success) {
      dispatch(updateUserStatus(status));
    }
  }
);

const savePhoto = createAsyncThunk(
  'profile/savePhoto',
  async (photo: string, { dispatch }) => {
    let res = await profileAPI.savePhoto(photo);
    if (res.data.resultCode === ResultCodesEnum.Success) {
      //@ts-ignore
      dispatch(saveUserPhoto(res.data.data));
    }
  }
);

const updateProfile = createAsyncThunk(
  'profile/updateProfile',
  async (dataForm: ProfileType, { dispatch, getState }) => {
    //временно
    let userId = store.getState().auth.userData.id;
    let res = await profileAPI.updateProfile(dataForm);
    if (res.data.resultCode === ResultCodesEnum.Success) {
      //@ts-ignore
      dispatch(getUserProfile(userId));
    } else {
      //@ts-ignore
      dispatch(stopSubmit('edit-profile', { _error: res.data.messages[0] }));
      return Promise.reject(res.data.messages[0]);
    }
  }
);

const profileActionsAndReducer = {
  addPost,
  profileReducer,
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  updateProfile,
};

export default profileActionsAndReducer;
