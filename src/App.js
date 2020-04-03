import React from 'react';
import './App.css';
import './components/Header/Header';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import { Route } from 'react-router-dom';

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage} 
                                                        sendMessage={props.sendMessage}  
                                                        updateNewMessageText={props.updateNewMessageText} />} />
          <Route path="/profile" render={() => <Profile state={props.state.profilePage} 
                                                        addPost={props.addPost} 
                                                        updateNewPostText={props.updateNewPostText}/>} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/setting" component={Setting} />
        </div>
      </div>
  );
}

export default App;
