import authActionsAndReducer from './auth-reducer';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
  initialized: boolean;
};

export const initialState: InitialStateType = {
  initialized: false,
};

export const appReducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    initializedSuccess(state: InitialStateType, action: PayloadAction) {
      state.initialized = true;
    },
  },
});

export const { initializedSuccess } = appReducer.actions;

export const initializeApp = createAsyncThunk(
  'app/initializeApp',
  async (_, { dispatch }) => {
    let promise = await dispatch(
      authActionsAndReducer.getUserAuthData() as any
    );
    Promise.all([promise]).then(() => dispatch(initializedSuccess() as any));
  }
);

const appActionsAndReducer = {
  appReducer,
};

export default appActionsAndReducer;
