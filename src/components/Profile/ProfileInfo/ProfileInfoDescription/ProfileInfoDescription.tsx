import s from './ProfileInfoDescription.module.sass';
import React from 'react';
import { ContactsType, ProfileType } from '../../../../types/types';

type ProfileInfoDescriptionType = {
  profile: ProfileType;
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
        <ul className={s.list}>
          <li className={s.item}>
            {/*<span className={s.item_fullName}>fullName:</span>*/}
            <span className={s.item_fullName}>
              <b>{props.profile.fullName}</b>
            </span>
          </li>

          {props.profile.lookingForAJobDescription && (
            <li className={s.item}>
              <span>Description:</span>
              {props.profile.lookingForAJobDescription}
            </li>
          )}

          {props.profile.lookingForAJob && (
            <li className={s.item}>
              <span>looking For A Job:</span>
              {props.profile.lookingForAJob}
            </li>
          )}

          {props.profile.aboutMe && (
            <li className={s.item}>
              <span>About Me:</span>
              {props.profile.aboutMe}
            </li>
          )}

          {/*<div>
                    Contacts:
                    {
                        props.profile &&
                        Object.keys(props.profile.contacts).map(c => <div key={"contacts." + c}>{props.profile.contacts[c]}</div>)
                    }
                </div>*/}
        </ul>
      )}
    </div>
  );
};
