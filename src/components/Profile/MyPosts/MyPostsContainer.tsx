import React from 'react';
import profileActionsAndReducer from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { RootState } from '../../../redux/redux-store';
import { PostType } from '../../../types/types';

type mapStateToPropsType = {
  posts: Array<PostType>;
  isAuth: boolean | null;
  photo?: string;
};

type mapDispatchToPropsType = {
  addPost: (newPostText: string) => void;
};

const mapStateToProps = (state: RootState): mapStateToPropsType => {
  return {
    posts: state.profilePage.posts,
    isAuth: state.auth.userData.isAuth,
    photo: state.profilePage.profile?.photos.small,
  };
};

export const MyPostsContainer = connect<
  mapStateToPropsType,
  mapDispatchToPropsType,
  {},
  RootState
>(mapStateToProps, {
  addPost: profileActionsAndReducer.addPost,
})(MyPosts);
