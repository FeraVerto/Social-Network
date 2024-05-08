import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../common/FormsControls/FormsControls';
import React, { FormEventHandler } from 'react';
import s from './ProfileInfoForm.module.sass';
import avatar from '../../../assets/image/ufo-2.png';
import { ProfileType } from '../../../types/types';
import { Button } from '../../common/Button/Button';

type ProfileInfoFormType = {
  profile: ProfileType;
  isOwner: boolean;
  // savePhoto?: (photo: string) => void;
  refreshProfile: () => void;
  onSubmit: (dataForm: FormEventHandler<HTMLFormElement>) => void;
};

export const ProfileInfoForm = ({
  profile,
  isOwner,
  onSubmit,
}: // savePhoto,
// error,
ProfileInfoFormType) => {
  const onMainPhotoSelected = (e: any) => {
    if (e.target.files.length) {
      // savePhoto(e.target.files[0]);
    }
  };

  return (
    <>
      {/*<div className={s.avatar}><img src={profile.photos.large || avatar}
                                           alt="user avatar"
                                           width="180"
                                           height="180"/></div>
            <input type="file" onChange={onMainPhotoSelected}/>*/}

      <form
        className={s.form}
        //onSubmit={onSubmit}
      >
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
              {/* {Object.keys(profile.contacts).map((c) => (
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
              ))} */}
            </div>
          </div>
        </div>
        <Button>Save</Button>
        {/* {error && <div className={s.formSummaryError}>{error}</div>} */}
      </form>
    </>
  );
};

export const ProfileInfoFormRedux = reduxForm<ProfileInfoFormType>({
  form: 'edit-profile',
  //@ts-ignore
})(ProfileInfoForm);
