import s from './ProfileInfo.module.sass';
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
    <div>
      {
        <div className={s.profile}>
          <div className={s.profile_info}>
            <div>
              <div className={s.avatar}>
                <img
                  src={profile.photos.large || avatar}
                  alt="user avatar"
                  width="300"
                  height="300"
                />
              </div>

              <div>
                <ProfileStatusWithHook
                  status={status}
                  updateStatus={updateStatus}
                />
              </div>
              <div className={s.button_block}>
                <NavLink
                  // className={m.button + ' ' + s.button_block_dialogs}
                  to={'/messages'}
                >
                  Dialog
                </NavLink>
                <Button>Follow</Button>
              </div>
            </div>

            <ProfileInfoDescription profile={profile} />
          </div>
        </div>
      }
    </div>
  );
};

/*//work in progress...
let arr2 = [2, 1, 1, 1, 1, 1, 1, 1, 1, 1]
let arr3 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 2]
let arr = [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1] // "2" - 7 по счету, 6 по индексу, length - 13,индексы до 12

function findUniq(arr) {
    let res = 0;
    if (arr[0] !== arr[arr.length - 1]) {
        if (arr[0] !== arr[1]) {
            res = arr[0]
        } else {
            res = arr[arr.length - 1]
        }

        //нужно вставить вот эту проверку на нечетное количство элементов в массиве
        //на случай, если отличающееся число в центре
        if((arr.length / 2) % 2 !== 0 && arr[Math.floor(arr.length / 2)] === res) {
            res += arr[Math.floor(arr.length / 2)]
        }

    } else {
        res += arr[0]

        for (let i = 1; i < Math.ceil(arr.length / 2); i++) {

            if (arr[i] !== arr[arr.length - i - 1] && arr[i] === res) {
                res += arr[i]
                break
            } else if (arr[i] !== arr[arr.length - i - 1] && arr[arr.length - i - 1] === res) {
                res += arr[arr.length - i - 1]
                break
            }
        }
    }

    return res
}

findUniq(arr)
findUniq(arr3)
findUniq(arr2)*/
