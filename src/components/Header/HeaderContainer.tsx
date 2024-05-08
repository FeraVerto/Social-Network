import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { RootState } from '../../redux/redux-store';
import { photoType } from '../../redux/auth-reducer';
import authActions from '../../redux/auth-reducer';
import { RouteComponentProps, withRouter } from 'react-router-dom';

type ParamsType = {
  userId: string;
};

type mapStateToPropsType = {
  userData: {
    id: number | null;
    email: string | null;
    login: string | null;
    isAuth: boolean;
    photo: photoType;
  };
};

type mapDispatchToPropsType = {
  /*getUserAuthData: () => void*/
  getUserPhoto: (userId: string) => void;
  logoutTC: () => void;
};

type OwnHeaderContainerType = mapStateToPropsType & mapDispatchToPropsType;
type HeaderContainerType = RouteComponentProps<ParamsType> &
  OwnHeaderContainerType;

class HeaderContainer extends React.Component<HeaderContainerType> {
  componentDidMount() {
    /*//запрашиваем авторизационные данные
        this.props.getUserAuthData()
*/
    //запрашиваем фото авторизованного пользователя
    let userId = this.props.match.params.userId;
    this.props.getUserPhoto(userId);
  }

  render = () => <Header {...this.props} />;
}

let mapStateToProps = (state: RootState): mapStateToPropsType => {
  return {
    userData: {
      id: state.auth.userData.id,
      email: state.auth.userData.email,
      login: state.auth.userData.login,
      isAuth: state.auth.userData.isAuth,
      photo: state.auth.userData.photo ?? { small: '', large: '' },
    },
  };
};

let WithUrlUsersDataContainerComponent = withRouter(HeaderContainer);

export default connect<
  mapStateToPropsType,
  mapDispatchToPropsType,
  {},
  RootState
>(mapStateToProps, {
  /*getUserAuthData,*/
  getUserPhoto: authActions.getUserPhoto,
  logoutTC: authActions.logoutTC,
})(WithUrlUsersDataContainerComponent);
