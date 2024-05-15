import React, { FormEventHandler, useEffect, useState } from 'react';
import { ProfileInfoFormRedux } from '../Profile/ProfileInfoForm/ProfileInfoForm';
import { ProfileInfoDescription } from '../Profile/ProfileInfo/ProfileInfoDescription/ProfileInfoDescription';
import { useDispatch, useSelector } from 'react-redux';
import profileActionsAndReducer from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { ProfileType } from '../../types/types';
import { AppDispatch, RootState } from '../../redux/redux-store';
import { Button } from '../common/Button/Button';
import s from './Settings.module.sass';

type PathParamsType = {
  userId: string;
};

//@ts-ignore
export const Settings: React.FC<any> = withRouter(({ match, history }) => {
  const { getUserProfile, savePhoto, updateProfile } = profileActionsAndReducer;
  let profileState = useSelector<RootState, ProfileType>(
    (state) => state.profilePage.profile
  );
  let authorizedUserId = useSelector<RootState>(
    (state) => state.auth.userData.isAuth
  );

  let [editMode, setEditMode] = useState<boolean>(false);
  let dispatch = useDispatch<AppDispatch>();

  let submitProfileInfoReduxForm = (
    dataForm: FormEventHandler<HTMLFormElement>
  ) => {
    //посмотреть что тут приходит
    // dispatch(updateProfile(dataForm));
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
          // isOwner={match.params.userId}
          // profile={profileState}
          // onSubmit={submitProfileInfoReduxForm}
          // savePhoto={savePhoto}
          // setEditMode={setEditMode}
          // editMode={editMode}
          />
        </div>
      ) : (
        <div className={s.settings_info}>
          <div className={s.settings_info_description}>
            <ProfileInfoDescription profile={profileState} />
          </div>

          {/*{isOwner && <button onClick={() => setEditMode(!editMode)}>Edit</button>}*/}
          <Button style={s.button_width} onClick={() => setEditMode(!editMode)}>
            Edit
          </Button>
        </div>
      )}
    </div>
  );
});
