import React from 'react';
import s from './Users.module.sass';
import { Paginator } from '../common/Paginator/Paginator';
import { User } from './User/User';
import { UserType } from '../../types/types';
import { UserSearch } from './Search/UserSearch';

type PropsType = {
  users: Array<UserType>;
  follow: (id: number) => void;
  unfollow: (id: number) => void;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number | string;
  onPageChanged: (pageNumber: number) => void;
  followingInProgress: Array<number>;
  onSearch: (term: { term: string }) => void;
  search?: string;
};

export const Users: React.FC<PropsType> = ({
  users,
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  followingInProgress,
  unfollow,
  follow,
  onSearch,
}) => {
  return (
    <div className={s.users}>
      <UserSearch onSearch={onSearch} />

      <div className={s.users_list}>
        {users.map((u) => (
          <User
            user={u}
            key={u.id}
            followingInProgress={followingInProgress}
            unfollow={unfollow}
            follow={follow}
          />
        ))}
      </div>

      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />
    </div>
  );
};
