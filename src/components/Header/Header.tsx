import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import avatar from './../../assets/images/base-avatar.png';
import { authType } from '../../redux/auth-reducer';
import { Button } from '../common/Button/Button';

type HeaderType = authType & {
  logoutTC: () => void;
};

const Header: React.FC<HeaderType> = ({ userData, logoutTC }) => {
  const { photo, isAuth, login } = userData;
  return (
    <>
      <div className={s.site_name}>{/* <span>S</span>pacebook */}</div>

      <header className={s.header}>
        <div className={s.header_search}>
          <input type="search" name="search" />
          <button className={s.header_search_button}>Search</button>
        </div>
        {photo?.small === '' ? (
          <img src={avatar} width="40px" height="40px" alt="avatar" />
        ) : (
          <img src={photo?.small} width="40px" height="40px" alt="avatar" />
        )}

        {isAuth ? (
          //? <div>{login} <button onClick={logoutTC}>Log out</button></div>
          <div className={s.loginBlock}>
            {login} <Button onClick={logoutTC}>Log out</Button>
          </div>
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </header>
    </>
  );
};

export default Header;
