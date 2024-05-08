import React from 'react';
import { FriendType } from '../../../redux/redux-store';
import { Avatar } from '@material-ui/core';
import s from './Friends.module.sass';

type FriendsType = {
  friends: Array<FriendType>;
};

export const Friends: React.FC<FriendsType> = (props) => {
  let friendsList = props.friends.map((f) => (
    <li key={f.id} className={s.friends_item}>
      <div className={s.friends_item_photo}>
        <img
          width={50}
          height={50}
          className={s.avatar}
          src={f.avatar}
          alt={f.name}
        />
      </div>

      <span>{f.name}</span>
    </li>
  ));

  return (
    <ul className={s.friends_list}>{friendsList}</ul>
    //@ts-ignore
    /*<AvatarGroup className={s.friends_block} spacing={0} max={3}>
            {friendsList}
        </AvatarGroup>*/
  );
};
