import React from 'react';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

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
    <main>
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
