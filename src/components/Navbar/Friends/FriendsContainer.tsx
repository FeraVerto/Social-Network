import React from 'react';
import { Friends } from './Friends';
import { connect } from 'react-redux';
import { RootState, FriendType } from '../../../redux/redux-store';

type mapStateToPropsType = {
  friends: Array<FriendType>;
};

type mapDispatchToPropsType = {};

const mapStateToProps = (state: RootState): mapStateToPropsType => {
  return {
    friends: state.sidebar.friends,
  };
};

/*https://stackoverflow.com/questions/49808004/parameter-dispatch-implicitly-has-an-any-type*/
const mapDispatchToProps = (dispatch: any) => {
  return {};
};
export const FriendsContainer = connect<
  mapStateToPropsType,
  mapDispatchToPropsType,
  {},
  RootState
>(
  mapStateToProps,
  mapDispatchToProps
)(Friends);
