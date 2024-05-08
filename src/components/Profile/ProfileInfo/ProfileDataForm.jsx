import React from 'react';
import { reduxForm } from 'redux-form';
import {
  createField,
  Input,
  Textarea,
} from '../../common/FormsControls/FormsControls';
import s from './ProfileInfo.module.css';

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {error && <div className={s.formSummaryError}> {error} </div>}
      <div className={s.form}>
        <div className={s.userInfo}>
          <span className={s.userName}>
            {' '}
            {createField('Full name', 'fullName', [], Input)}
          </span>

          <ul className={s.listInfo}>
            <li>
              <b>Looking for a job: </b>{' '}
              {createField('', 'lookingForAJob', [], Input, {
                type: 'checkbox',
              })}
            </li>
            <li>
              <b>My professional skills: </b>{' '}
              {createField(
                'My professional skills',
                'lookingForAJobDescription',
                [],
                Textarea
              )}
            </li>
            <li>
              <b>About me:</b>
              {createField('About me', 'aboutMe', [], Textarea)}
            </li>
          </ul>
        </div>
        <div className={s.userContact}>
          {profile.website}
          <ul className={s.profileInfoContacts}>
            {Object.keys(profile.contacts).map((key) => {
              return (
                <div className={s.contact}>
                  <b>
                    {key}
                    {createField(key, 'contacts.' + key, [], Input)}{' '}
                  </b>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <div>
        <button>Save</button>
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(
  ProfileDataForm
);

export default ProfileDataFormReduxForm;
