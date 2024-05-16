import React, { FormEvent, FormEventHandler, useEffect, useState } from 'react';
import { ProfileInfoFormRedux } from '../Profile/ProfileInfoForm/ProfileInfoForm';
import { ProfileInfoDescription } from '../Profile/ProfileInfo/ProfileInfoDescription/ProfileInfoDescription';
import { useDispatch, useSelector } from 'react-redux';
import profileActionsAndReducer from '../../redux/profile-reducer';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ProfileType } from '../../types/types';
import { AppDispatch, RootState } from '../../redux/redux-store';
import { Button } from '../common/Button/Button';
import s from './Settings.module.css';

type PathParamsType = {
  userId: string;
};

type PropsType = RouteComponentProps<PathParamsType>;

//@ts-ignore
export const Settings: React.FC<PropsType> = withRouter(
  //@ts-ignore
  ({ match, history }) => {
    const { getUserProfile, savePhoto, updateProfile } =
      profileActionsAndReducer;
    let profileState = useSelector<RootState, ProfileType>(
      (state) => state.profilePage.profile
    );
    let authorizedUserId = useSelector<RootState>(
      (state) => state.auth.userData.isAuth
    );

    let [editMode, setEditMode] = useState<boolean>(false);
    let dispatch = useDispatch<AppDispatch>();

    let submitProfileInfoReduxForm = (dataForm: ProfileType) => {
      dispatch(updateProfile(dataForm));
      setEditMode(!editMode);
    };

    let userId = match.params.userId;

    useEffect(() => {
      dispatch(getUserProfile(userId));
    }, [dispatch, getUserProfile, userId]);

    if (!userId) {
      userId = authorizedUserId;
      if (!userId) {
        //Не самое лучшее решение, но по-быструхе можно так сделать
        history.push('/login');
      }
    }

    return (
      <div className={s.settings}>
        {editMode ? (
          <div className={s.settings_form}>
            <ProfileInfoFormRedux
              savePhoto={savePhoto}
              initialValues={profileState}
              profile={profileState}
              onSubmit={submitProfileInfoReduxForm}
            />
          </div>
        ) : (
          <div className={s.settings_info}>
            <ProfileInfoDescription profile={profileState} />

            {/*{isOwner && <button onClick={() => setEditMode(!editMode)}>Edit</button>}*/}
            <Button
              style={s.button_width}
              onClick={() => setEditMode(!editMode)}
            >
              Edit
            </Button>
          </div>
        )}
      </div>
    );
  }
);
