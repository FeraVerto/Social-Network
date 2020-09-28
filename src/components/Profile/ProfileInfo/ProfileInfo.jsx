import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/base-avatar.png';
import ProfileDataForm from './ProfileDataForm';


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div className={s.background}>
            <div className={s.userAvatar}>
                <img src={profile.photos.large || userPhoto} alt="Freddy"></img>
                {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
            </div>
            { editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} isOwner={isOwner} />
                : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} />}

            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

        </div>
    )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return <div>
        {isOwner ?? <div><button onClick={goToEditMode}>Edit</button></div>}

        <span className={s.userName}>{profile.fullName}</span>

        <div className={s.userInfo}>

            <ul className={s.listInfo}>
                <li>
                    <b>Looking for a job: </b>{profile.lookingForAJob ? 'yes' : 'no'}
                </li>
                <li>
                    {profile.lookingForAJob && <div><b>My professional skills: </b> {profile.lookingForAJobDescription}</div>}
                </li>
                <li>
                    <b>About me:</b> {profile.aboutMe}
                </li>
            </ul>
        </div>
        <div className={s.userContact}>{profile.website}
            <ul className={s.profileInfoContacts}>
                {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                })}
            </ul>
        </div>
    </div>
}



export const Contact = ({ contactTitle, contactValue }) => {
    return <li><b>{contactTitle}</b>: {contactValue}</li>
}

export default ProfileInfo;

