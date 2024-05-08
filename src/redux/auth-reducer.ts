import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authAPI, ResultCodesEnum, usersAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

export type photoType = {
  small: string;
  large: string;
};

export type authType = {
  userData: {
    id: number | null;
    email: string | null;
    login: string | null;
    isAuth: boolean;
    photo?: photoType;
  };
};

export const initialState: authType = {
  userData: {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    photo: {
      small: '',
      large: '',
    },
  },
};

type userData = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

type login = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha?: boolean;
};

export const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // type: SET_USER_DATA,
    // payload: { id, email, login, isAuth },
    setUserData(state: authType, action: PayloadAction<userData>) {
      state.userData = action.payload;
    },
    setUserPhoto(
      state: authType,
      action: PayloadAction<{ small: string; large: string }>
    ) {
      state.userData.photo = action.payload;
    },
  },
});

const { setUserData, setUserPhoto } = authReducer.actions;

const getUserAuthData = createAsyncThunk(
  'auth/getUserAuthData',

  async (_, { dispatch }) => {
    let res = await authAPI.me();
    if (res.resultCode === ResultCodesEnum.Success) {
      let id = res.data.id;
      let email = res.data.email;
      let login = res.data.login;
      dispatch(setUserData({ id, email, login, isAuth: true }));
    }
  }
);

const getUserPhoto = createAsyncThunk(
  'auth/getUserPhoto',
  async (userId: string, { dispatch }) => {
    usersAPI.getProfile(userId).then((response) => {
      let small = response?.photos.small;
      let large = response?.photos.large;
      if (small && large) {
        dispatch(setUserPhoto({ small, large }));
      }
    });
  }
);

const loginTC = createAsyncThunk(
  'auth/loginTC',
  async (loginData: login, { dispatch }) => {
    let data = await authAPI.login(loginData);
    if (data.resultCode === ResultCodesEnum.Success) {
      dispatch(getUserAuthData() as any);
    } else {
      let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
      //@ts-ignore
      dispatch(stopSubmit('login', { _error: message }));
    }
  }
);

const logoutTC = createAsyncThunk('auth/logoutTC', async (_, { dispatch }) => {
  let data = await authAPI.logout();
  if (data.resultCode === ResultCodesEnum.Success) {
    dispatch(
      setUserData({ id: null, email: null, login: null, isAuth: false })
    );
  }
});

const authActionsAndReducer = {
  authReducer,
  getUserAuthData,
  getUserPhoto,
  loginTC,
  logoutTC,
};

export default authActionsAndReducer;
