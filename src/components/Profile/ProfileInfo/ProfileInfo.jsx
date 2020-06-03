import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.background}>
            <div className={s.userAvatar}>
                <img src={props.profile.photos.large} alt="Freddy"></img>
            </div>
            <div className={s.userInfo}>
                <span className={s.userName}>{props.profile.fullName}</span>
                <ProfileStatus status={'Не унывайте, пацаны!'}/>
                <ul className={s.listInfo}>
                    <li>Date of Brith: 2 january</li>
                    <li>City: Springwood</li>
                    <li>Job: {props.profile.lookingForAJob}</li>
                </ul>
            </div>
            <div className={s.userContact}>{props.profile.website}
                <ul className={s.profileInfoContacts}>
                    <li><a href={props.profile.contacts.facebook}><img src="https://www.nicepng.com/png/full/facebook.png" alt=""/></a></li>
                    <li><a href={props.profile.contacts.website}><img src="https://www.nicepng.com/png/full/824-8249920_-png-vk.png" alt="" /></a></li>
                    <li><a href={props.profile.contacts.vk}><img src="https://www.nicepng.com/png/full/824-8249920_-png-vk.png" alt="" /></a></li>
                    <li><a href={props.profile.contacts.twitter}><img src="https://www.nicepng.com/png/full/824-8249920_-png-vk.png" alt="" /></a></li>
                    <li><a href={props.profile.contacts.instagram}><img src="https://www.nicepng.com/png/full/824-8249920_-png-vk.png" alt="" /></a></li>
                    <li><a href={props.profile.contacts.youtube}><img src="https://www.nicepng.com/png/full/824-8249920_-png-vk.png" alt="" /></a></li>
                    <li><a href={props.profile.contacts.github}><img src="https://www.nicepng.com/png/full/824-8249920_-png-vk.png" alt="" /></a></li>
                    <li><a href={props.profile.contacts.mainLink}><img src="https://www.nicepng.com/png/full/824-8249920_-png-vk.png" alt="" /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileInfo;

