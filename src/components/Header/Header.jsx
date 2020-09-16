import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.imgLogo}></div>
            <div className={s.logo}>Kruegerbook</div>
            <div>
                {props.isAuth
                    ?
                    <div className={s.loginBlock}>{props.login}
                        <button onClick={props.logout}> Log out </button>
                    </div>
                    :
                    <NavLink to={'/login'}> Login </NavLink>}
            </div>
        </header>
    )
}

export default Header;