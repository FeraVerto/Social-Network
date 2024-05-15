import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import avatar from './../../assets/images/base-avatar.jpg';
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
        {/* <div className={s.header_search}>
          <input type="search" name="search" />
          <button className={s.header_search_button}>Search</button>
        </div> */}

        {isAuth ? (
          //? <div>{login} <button onClick={logoutTC}>Log out</button></div>
          <div className={s.loginBlock}>
            {photo?.small === '' ? (
              <img
                src={avatar}
                className={s.avatar}
                width="40px"
                height="40px"
                alt="avatar"
              />
            ) : (
              <img
                src={photo?.small}
                className={s.avatar}
                width="40px"
                height="40px"
                alt="avatar"
              />
            )}
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
