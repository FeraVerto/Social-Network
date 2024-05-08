import React, { ComponentType } from 'react';
import { RootState } from '../redux/redux-store';
import { connect, ConnectedProps } from 'react-redux';
import { Redirect } from 'react-router-dom';

type MapStatePropsType = {
  isAuth: boolean | null;
};

const mapStateToProps = (state: RootState): MapStatePropsType => {
  return {
    isAuth: state.auth.userData.isAuth,
  };
};

const connector = connect(mapStateToProps);

export function withAuthRedirect<T>(
  Component: ComponentType<T & ConnectedProps<typeof connector>>
) {
  const RedirectComponent: React.FC<T & ConnectedProps<typeof connector>> = (
    props
  ) => {
    const { isAuth, ...restProps } = props;
    if (!isAuth) return <Redirect to={'/login'} />;
    return <Component {...(props as T & ConnectedProps<typeof connector>)} />;
  };
  //@ts-ignore
  return connector(RedirectComponent);
}
