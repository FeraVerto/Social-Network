import s from './ProfileInfo.module.css';
import React, { useState } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import avatar from './../../../assets/images/base-avatar.png';
import { ProfileStatusWithHook } from './ProfileInfoStatus/ProfileStatusWithHook';
import { NavLink } from 'react-router-dom';
import { ProfileInfoDescription } from './ProfileInfoDescription/ProfileInfoDescription';
import { ProfileType } from '../../../types/types';
import { Button } from '../../common/Button/Button';
// import m from './../../common/Button/Button.module.sass';

export type ProfileInfoType = {
  profile: ProfileType;
  status: string;
  updateStatus: (status: string) => void;
  isOwner: boolean;
  savePhoto?: (photo: string) => void;
  updateProfile: (dataForm: ProfileType) => any;
  refreshProfile: () => void;
};

export const ProfileInfo: React.FC<ProfileInfoType> = ({
  isOwner,
  profile,
  status,
  updateStatus,
  savePhoto,
  updateProfile,
}) => {
  //достаем значения из объекта и складываем в массив
  //фильтруем массив
  //возвращаем разметку со значениями из массива

  let [editMode, setEditMode] = useState<boolean>(false);
  //более правильное решение: создать флаг в бизнесе и менять
  //режим редактирования в соответсствии с его значением
  let submitProfileInfoReduxForm = (dataForm: ProfileType) => {
    updateProfile(dataForm).then(() => setEditMode(!editMode));
  };

  if (!profile) return <Preloader />;

  return (
    <div className={s.profile}>
      <div className={s.profile_info}>
        <div className={s.avatar}>
          <img src={profile.photos.large || avatar} alt="user avatar" />
        </div>
        {/* <div>
          <ProfileStatusWithHook status={status} updateStatus={updateStatus} />
        </div> */}
        <div className={s.button_block}>
          <Button style={s.profile_info_button}>Follow</Button>
        </div>
      </div>
      <ProfileInfoDescription
        profile={profile}
        status={status}
        updateStatus={updateStatus}
      />
    </div>
  );
};
