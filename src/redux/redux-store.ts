import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import profileActionsAndReducer from './profile-reducer';
import dialogsActionsAndReducer from './dialogs-reducer';
import messageActionsAndReducer from './message-reducer';
import sidebarActionsAndReducer from './sidebar-reducer';
import usersActionsAndReducer from './users-reducer';
import authActionsAndReducer from './auth-reducer';
import appActionsAndReducer from './app-reducer';
import { thunk as thunkMiddleware } from 'redux-thunk';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//@ts-ignore
/*const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export let store: StoreType = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));*/
//создаем store
const store = configureStore({
  reducer: {
    profilePage: profileActionsAndReducer.profileReducer?.reducer,
    dialogsPage: dialogsActionsAndReducer.dialogsReducer?.reducer,
    messagesPage: messageActionsAndReducer.messageReducer?.reducer,
    sidebar: sidebarActionsAndReducer.sidebarReducer?.reducer,
    usersPage: usersActionsAndReducer.usersReducer?.reducer,
    auth: authActionsAndReducer.authReducer?.reducer,
    form: formReducer,
    app: appActionsAndReducer.appReducer?.reducer,
  },
  //возможно и не нужно
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunkMiddleware),
});

export default store;
/*------------------------------------------------------*/

export type FriendType = {
  id: number;
  name: string;
  avatar: string;
};

export type UsersLocationType = {
  city: string;
  country: string;
};

export type SidebarFriendsType = {
  friends: Array<FriendType>;
};

/*---------------------------Users----------------------------*/
/*export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    },
    followed: boolean
}

export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number | string
    isFetching: boolean
    followingInProgress: Array<number>
}*/

/*export type photoType = {
    small: string,
    large: string
}*/
/*---------------------------Users----------------------------*/

/*---------------------------Auth----------------------------*/
/*export type authType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
    photo: photoType
}*/
/*---------------------------Auth----------------------------*/
