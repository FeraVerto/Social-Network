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
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <ul className={s.listInfo}>
                    <li>Date of Brith: 2 january</li>
                    <li>City: Springwood</li>
                    <li>Job: {props.profile.lookingForAJob}</li>
                </ul>
            </div>
            <div className={s.userContact}>{props.profile.website}
                <ul className={s.profileInfoContacts}>
                    <li><a href={props.profile.contacts.facebook}>FB</a></li>
                    <li><a href={props.profile.contacts.website}>Web</a></li>
                    <li><a href={props.profile.contacts.vk}>VK</a></li>
                    <li><a href={props.profile.contacts.twitter}>TW</a></li>
                    <li><a href={props.profile.contacts.instagram}>INST</a></li>
                    <li><a href={props.profile.contacts.youtube}>YB</a></li>
                    <li><a href={props.profile.contacts.github}>GH</a></li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileInfo;

