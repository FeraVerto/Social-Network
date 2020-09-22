import React, { Suspense } from 'react';
import './App.css';
import './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import { HashRouter, Route, withRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/login';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';

//import DialogsContainer from './components/Dialogs/DialogsContainer';
//В bandle не попадает до запроса (только по необходимости).
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    // if (!this.props.initialized) {
    //   return <Preloader />
    // }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <Suspense fallback={<Preloader />}>
          <div className='app-wrapper-content'>
            <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
            <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/setting" component={Setting} />
            <Route path="/login" component={() => <Login />} />
          </div>
        </Suspense>
      </div >
    );
  }

}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

let MainApp = (props) => {
  return <HashRouter>
    <Provider store={store}>
      <AppContainer />
      
    </Provider>
  </HashRouter>
}

export default MainApp;