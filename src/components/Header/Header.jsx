import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
    <header className={s.header}>
        <div className={s.logo}>Kruegerbook</div>
    </header>
    )
}

export default Header;