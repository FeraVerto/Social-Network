import s from './ProfileInfoDescription.module.css';
import React from 'react';
import { ContactsType, PhotosType, ProfileType } from '../../../../types/types';
import avatar from './../../../../assets/images/base-avatar.png';
import { ProfileStatusWithHook } from '../ProfileInfoStatus/ProfileStatusWithHook';

type ProfileInfoDescriptionType = {
  profile: ProfileType;
  status?: string;
  updateStatus?: (status: string) => void;
};

export const ProfileInfoDescription: React.FC<ProfileInfoDescriptionType> = (
  props
) => {
  /*userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
    contacts: ContactsType
    photos: PhotosType*/
  /* let contact = profile !== null && profile !== undefined && Object
         .values(profile.contacts)
         .filter(item => item !== null)
         .map((a: any) => {
             return <div key={a} className={s.contact}>
                 <a rel="stylesheet" href={a}>{a} </a>
             </div> //6326
         })*/

  return (
    <div>
      {props.profile !== null && (
        <>
          <table className={s.table}>
            <caption className={s.table_caption}>
              <span className={s.item_fullName}>
                <b>{props.profile.fullName}</b>
              </span>
            </caption>

            <thead className={s.table_thead}>
              <tr className={s.table_title_row}>
                <th className={s.table_title}>
                  {props.profile.lookingForAJobDescription && (
                    <li className={s.item}>
                      <span>Description</span>
                    </li>
                  )}
                </th>
                <th className={s.table_title}>
                  {props.profile.lookingForAJobDescription && (
                    <li className={s.item}>
                      <span>looking For A Job</span>
                    </li>
                  )}
                </th>
                <th className={s.table_title}>
                  {props.profile.lookingForAJobDescription && (
                    <li className={s.item}>
                      <span>About Me</span>
                    </li>
                  )}
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className={s.table_item}>
                <td>{props.profile.lookingForAJobDescription}</td>
                <td>{props.profile.lookingForAJob}</td>
                <td>{props.profile.aboutMe}</td>
              </tr>
              <tr className={s.table_status}>
                <td>status:</td>
                <tr>
                  {props.status && props.updateStatus && (
                    <ProfileStatusWithHook
                      status={props.status}
                      updateStatus={props.updateStatus}
                    />
                  )}
                </tr>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};
