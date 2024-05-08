import React from 'react';
import s from '../Users.module.sass';
import avatar from '../../../assets/images/base-avatar.png';
import { NavLink } from 'react-router-dom';
import { UserType } from '../../../types/types';

type UsersType = {
  user: UserType;
  follow: (id: number) => void;
  unfollow: (id: number) => void;
  followingInProgress: Array<number>;
};

export const User = ({
  user,
  followingInProgress,
  unfollow,
  follow,
}: UsersType) => {
  return (
    <div className={s.users}>
      <div key={user.id} className={s.user}>
        <div className={s.user_avatar}>
          <NavLink to={'/profile/' + user.id}>
            <img
              className={s.avatar}
              src={user.photos.large !== null ? user.photos.large : `${avatar}`}
              alt={user.name}
            />
          </NavLink>
        </div>

        <div className={s.button_followed}>
          {user.followed ? (
            <button
              className={s.follow_unfollow_button}
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              className={s.follow_unfollow_button}
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>

        <div className={s.user_info}>
          <div className={s.user_info_name}>
            <div className={s.user_name}>{user.name}</div>
            <div className={s.user_status}>{user.status}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
