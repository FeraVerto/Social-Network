import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { Input } from '../common/FormsControls/FormsControls';
import { Field } from 'redux-form';

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.logo}>Kruegerbook</div>
      {/* <div className={s.imgLogo}></div> */}
      <div className={s.header_search}>
        {/* Временная заглушка */}
        <input type="search" name="search" />
        <button className={s.header_search_button}>Search</button>
      </div>
      <div>
        {props.isAuth ? (
          <div className={s.loginBlock}>
            {props.login}
            <button onClick={props.logout}> Log out </button>
          </div>
        ) : (
          <NavLink to={'/login'}> Login </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
