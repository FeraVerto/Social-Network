import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (

        <div className={s.background}>
            <div className={s.userAvatar}>
                <img src="https://lamcdn.net/furfurmag.ru/post-cover/PYMgsmfOiI0s9C3k8dwZ8Q-default.jpg" alt="Freddy"></img>
            </div>
            <div className={s.userInfo}>
                <span className={s.userName}>Freddy Krueger</span>
                <ul className={s.listInfo}>
                    <li>Date of Brith: 2 january</li>
                    <li>City: Springwood</li>
                    <li>Education: no</li>
                    <li>Web Site: kruegerbook.com</li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileInfo;

