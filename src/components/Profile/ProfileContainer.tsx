import React from 'react';
import profileActionsAndReducer from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { RootState } from '../../redux/redux-store';
import { Profile } from './Profile';
import { ProfileType } from '../../types/types';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component<ProfileContainerType> {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        //Не самое лучшее решение, но по-быструхе можно так сделать
        this.props.history.push('/login');
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(
    prevProps: Readonly<ProfileContainerType>,
    prevState: Readonly<{}>,
    snapshot?: any
  ) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
        updateProfile={this.props.updateProfile}
        refreshProfile={this.refreshProfile}
      />
    );
  }
}

//typing
type ParamsType = {
  userId: any;
};

type mapStateToPropsType = {
  profile: ProfileType | null;
  status: string;
  authorizedUserId: number | null;
};

type mapDispatchToPropsType = {
  getUserProfile: (userId: string) => void;
  getStatus: (userId: string) => void;
  updateStatus: (status: string) => void;
  savePhoto: (photo: string) => void;
  updateProfile: (dataForm: ProfileType) => void;
};

type ProfileInfoContainerType = mapStateToPropsType & mapDispatchToPropsType;
type ProfileContainerType = RouteComponentProps<ParamsType> &
  ProfileInfoContainerType;
//typing

const mapStateToProps = (state: RootState): mapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userData.id,
  };
};

export default compose<React.ComponentType>(
  withRouter,
  withAuthRedirect,
  connect<mapStateToPropsType, mapDispatchToPropsType, {}, RootState>(
    mapStateToProps,
    {
      getUserProfile: profileActionsAndReducer.getUserProfile,
      updateProfile: profileActionsAndReducer.updateProfile,
      getStatus: profileActionsAndReducer.getStatus,
      updateStatus: profileActionsAndReducer.updateStatus,
      savePhoto: profileActionsAndReducer.savePhoto,
    }
  )
)(ProfileContainer);
