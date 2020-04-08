import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import Friends from './Friends/Friends';


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                <li className={s.item}><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></li>
                <li className={s.item}><NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink></li>
                <li className={s.item}><NavLink to="news" activeClassName={s.activeLink}>News</NavLink></li>
                <li className={s.item}><NavLink to="music" activeClassName={s.activeLink}>Music</NavLink></li>
                <li className={s.item}><NavLink to="setting" activeClassName={s.activeLink}>Settings</NavLink></li>
            </ul>
            <Friends />
        </nav>
    )
}

export default Navbar;