import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
    return (
        <main className={s.mainContent}>
            <ProfileInfo /> 
            <MyPostsContainer />
        </main>
    )
}

export default Profile;

