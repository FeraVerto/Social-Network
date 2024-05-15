import React from 'react';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';

export const Profile = ({
  isOwner,
  profile,
  status,
  updateStatus,
  savePhoto,
  updateProfile,
  refreshProfile,
}: any) => {
  return (
    <main className={s.mainContent}>
      <ProfileInfo
        isOwner={isOwner}
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        savePhoto={savePhoto}
        updateProfile={updateProfile}
        refreshProfile={refreshProfile}
      />
      <MyPostsContainer />
    </main>
  );
};
