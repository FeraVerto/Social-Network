import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Users } from '../Users/Users';
import UsersContainer from '../Users/UsersContainer';
import { requestUsers } from '../../redux/users-reducer';
import { RootState } from '../../redux/redux-store';
import { PostType, UserType } from '../../types/types';

export const Friends = (props: any) => {
  let dispatch = useDispatch();

  useEffect(() => {
    // dispatch(requestUsers(1, 1, undefined, true))
  });

  let friends = useSelector<RootState, Array<UserType>>(
    (state) => state.usersPage.users
  );
  console.log('friends', friends);

  return <div></div>;
};
