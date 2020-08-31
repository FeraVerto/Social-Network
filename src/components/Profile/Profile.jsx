import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';



const Profile = (props) => {
    return (
        <main className={s.mainContent}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/> 
            <MyPostsContainer />
        </main>
    )
}

export default Profile;

