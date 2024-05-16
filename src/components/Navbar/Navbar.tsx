import React from 'react';
import s from './Navbar.module.css';
import { MenuItem } from './MenuItem/MenuItem';

const Navbar: React.FC = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.nav_list}>
        {/*NavLink - не перезагружая страницу, меняем адресную строку*/}
        <MenuItem to={'/Social-Network/profile'} item={'Profile'} />
        <MenuItem to={'/Social-Network/dialogs'} item={'Dialogs'} />
        <MenuItem to={'/Social-Network/friends'} item={'Friends'} />
        <MenuItem to={'/Social-Network/settings'} item={'Settings'} />
        <MenuItem to={'/Social-Network/users'} item={'Users'} />
        <MenuItem to={'/Social-Network/chat'} item={'Chat'} />
      </ul>
    </nav>
  );
};

export default Navbar;
