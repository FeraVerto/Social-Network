import React from 'react';
import s from './Navbar.module.css';
import { MenuItem } from './MenuItem/MenuItem';

const Navbar: React.FC = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.nav_list}>
        {/*NavLink - не перезагружая страницу, меняем адресную строку*/}
        <MenuItem to={'/profile'} item={'Profile'} />
        <MenuItem to={'/dialogs'} item={'Dialogs'} />
        <MenuItem to={'/friends'} item={'Friends'} />
        <MenuItem to={'/settings'} item={'Settings'} />
        <MenuItem to={'/users'} item={'Users'} />
        <MenuItem to={'/chat'} item={'Chat'} />
      </ul>
    </nav>
  );
};

export default Navbar;
