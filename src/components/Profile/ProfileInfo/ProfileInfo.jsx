import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.background}>
                <img  alt='baby-yoda' src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"></img>
            </div>
            <div>Avatar + description</div>
        </div>
    )
}

export default ProfileInfo;

