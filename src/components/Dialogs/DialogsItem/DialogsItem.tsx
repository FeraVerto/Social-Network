import { NavLink } from 'react-router-dom';
import s from '../Dialogs.module.sass';
import React from 'react';
import { Avatar } from '@material-ui/core';
import { DialogsItemType } from '../../../types/types';

export const DialogsItem: React.FC<DialogsItemType> = ({
  id,
  avatar,
  name,
  lastMessage,
}) => {
  return (
    <NavLink className={s.link} to={'/messages/' + id}>
      <li className={s.item}>
        <Avatar alt="Remy Sharp" src={avatar} />
        <div className={s.message}>
          <div className={s.user_name}>{name}</div>
          <div className={s.last_message}>{lastMessage}</div>
        </div>
      </li>
    </NavLink>
  );
};
