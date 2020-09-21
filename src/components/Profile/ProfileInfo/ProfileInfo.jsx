import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Preloader />
    }
    return (
        <div className={s.background}>
            <div className={s.userAvatar}>
                <img src={profile.photos.large} alt="Freddy"></img>
            </div>
            <div className={s.userInfo}>
                <span className={s.userName}>{profile.fullName}</span>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <ul className={s.listInfo}>
                    <li>Date of Brith: 2 january</li>
                    <li>City: Springwood</li>
                    <li>Job: {profile.lookingForAJob}</li>
                </ul>
            </div>
            {/* <div className={s.userContact}>{profile.website}
                <ul className={s.profileInfoContacts}>
                    <li><a href={profile.contacts.facebook}>FB</a></li>
                    <li><a href={profile.contacts.website}>Web</a></li>
                    <li><a href={profile.contacts.vk}>VK</a></li>
                    <li><a href={profile.contacts.twitter}>TW</a></li>
                    <li><a href={profile.contacts.instagram}>INST</a></li>
                    <li><a href={profile.contacts.youtube}>YB</a></li>
                    <li><a href={profile.contacts.github}>GH</a></li>
                </ul>
            </div> */}
        </div>
    )
}

export default ProfileInfo;

