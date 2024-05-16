import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../common/FormsControls/FormsControls';
import React from 'react';
import s from './ProfileInfoForm.module.css';
import avatar from '../../../assets/images/base-avatar.jpg';
import { ProfileType } from '../../../types/types';

type ProfileInfoFormType = {
  profile: ProfileType;
  savePhoto: (data: string) => void;
};

const validate = (values: ProfileType) => {
  const errors: Partial<ProfileType> = {};

  if (!values?.fullName) {
    errors.fullName = 'Required';
  }
  if (!values?.aboutMe) {
    errors.aboutMe = 'Required';
  }
  if (!values?.lookingForAJobDescription) {
    errors.lookingForAJobDescription = 'Required';
  }

  if (values?.contacts) {
    errors.contacts = {};
    Object.keys(values.contacts).forEach((key) => {
      if (
        values.contacts[key] &&
        errors.contacts &&
        !/^(https?:\/\/)?(www\.)?[\w-]+\.[a-z]{2,6}(\.[a-z]{2,6})?(\/[\w-]*)*\/?$/.test(
          values.contacts[key] as string
        )
      ) {
        errors.contacts[key] = 'Invalid URL';
      }
    });
  }

  return errors;
};

const ProfileInfoForm: React.FC<
  InjectedFormProps<ProfileType, ProfileInfoFormType> & ProfileInfoFormType
> = ({ handleSubmit, profile, savePhoto }) => {
  const onMainPhotoSelected = (e: any) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <>
      <div className={s.avatar}>
        <img
          src={profile?.photos.large || avatar}
          alt="user avatar"
          width="180"
          height="180"
        />
      </div>
      <input type="file" onChange={onMainPhotoSelected} />

      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.form_block}>
          <div className={s.form_block_info}>
            <div className={s.item_form}>
              {' '}
              full Name:
              <Field
                component={Input}
                name={'fullName'}
                placeholder={'Full name'}
                className={`${s.item_form_fullName} ${s.item}`}
              />
            </div>

            <div className={s.item_form}>
              {' '}
              looking For A Job Description:
              <Field
                component={Input}
                name={'lookingForAJobDescription'}
                placeholder={'Empty'}
                className={`${s.item_form_description} ${s.item}`}
              />
            </div>

            <div className={s.item_form}>
              {' '}
              About Me:
              <Field
                component={Textarea}
                name={'aboutMe'}
                placeholder={'Empty'}
                className={`${s.item_form_aboutMe} ${s.item}`}
              />
            </div>

            <div className={s.item_form}>
              {' '}
              looking For A Job:
              <Field
                component={Input}
                name={'lookingForAJob'}
                placeholder={'Empty'}
                type={'checkbox'}
                className={`${s.item_form_job} ${s.item}`}
              />
            </div>
          </div>

          <div className={s.form_block_contacts}>
            <div>
              {profile?.contacts &&
                Object.keys(profile.contacts).map((c) => (
                  <div className={s.item_form}>
                    {c}
                    <Field
                      key={c}
                      component={Input}
                      name={'contacts.' + c}
                      placeholder={'Empty'}
                      className={s.item}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <button className={s.edit_button} type="submit">
          Save
        </button>
        {/* {error && <div className={s.formSummaryError}>{error}</div>} */}
      </form>
    </>
  );
};

export const ProfileInfoFormRedux = reduxForm<ProfileType, ProfileInfoFormType>(
  {
    form: 'edit-profile',
    //@ts-ignore
    validate,
  }
)(ProfileInfoForm);
