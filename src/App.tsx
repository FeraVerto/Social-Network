import React, { Suspense } from 'react';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
//store
import { initializeApp } from './redux/app-reducer';
import { RootState } from './redux/redux-store';
import store from './redux/redux-store';
//components
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Preloader from './components/common/Preloader/Preloader';
import { Settings } from './components/Settings/Settings';
import { Friends } from './components/Friends/Friends';
//hoc
import { withSuspense } from './hoc/withSuspense';
//containers
import { MessagesContainer } from './components/Dialogs/Messages/MessagesContainer';
import { FriendsContainer } from './components/Navbar/Friends/FriendsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import UsersContainer from './components/Users/UsersContainer';
//styles
import './App.css';

const DialogsContainer = React.lazy(
  () => import('./components/Dialogs/DialogsContainer')
);
const ProfileContainer = React.lazy(
  () => import('./components/Profile/ProfileContainer')
);
const ChatPage = React.lazy(() => import('./pages/Chat/ChatPage'));

const SuspendedChatPage = withSuspense(ChatPage);
const SuspendedProfileContainer = withSuspense(ProfileContainer);
const SuspendedDialogsContainer = withSuspense(DialogsContainer);

type AppContainerType = mapStateToPropsType & mapDispatchToPropsType;
type mapDispatchToPropsType = {
  initializeApp: () => void;
};

type mapStateToPropsType = {
  initialized: boolean;
};

let mapStateToProps = (state: RootState) => {
  return {
    initialized: state.app.initialized,
  };
};

export class App extends React.Component<AppContainerType> {
  componentDidMount() {
    //запрашиваем авторизационные данные
    this.props.initializeApp();
  }

  render() {
    return !this.props.initialized ? (
      <Preloader />
    ) : (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <Suspense fallback={<Preloader />}>
          <div className="app-wrapper-content">
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to={'/profile'} />}
              />
              <Route
                path="/profile/:userId?"
                render={() => <SuspendedProfileContainer />}
              />
              <Route
                path="/dialogs"
                render={() => <SuspendedDialogsContainer />}
              />
              <Route path="/friends" render={() => <Friends />} />
              <Route path="/messages" render={() => <MessagesContainer />} />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/chat" render={() => <SuspendedChatPage />} />
              <Route path="/settings" render={() => <Settings />} />
              <Route path="/login" render={() => <Login />} />
              <Route path="*" render={() => <div>404 NOT FOUND</div>} />
            </Switch>
          </div>
        </Suspense>
      </div>
    );
  }
}

let AppContainer = compose(
  connect<mapStateToPropsType, mapDispatchToPropsType, {}, RootState>(
    mapStateToProps,
    { initializeApp }
  )(App)
);

const MainApp = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default MainApp;
