import React from 'react';
import s from './MyPost.module.sass';
import { Avatar, Checkbox, FormControlLabel } from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import { PhotosType, PostType } from '../../../../types/types';

type MyPostPropsType = {
  photo?: string;
};

const MyPost: React.FC<PostType & MyPostPropsType> = (props) => {
  return (
    <div className={s.post_block}>
      <div className={s.post}>
        <Avatar src={props.photo} alt="Аватарка" />
        <FormControlLabel
          control={
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              name="checkedH"
            />
          }
          label={props.like}
        />
      </div>
      <div className={s.post_text}>{props.message}</div>
    </div>
  );
};

export default MyPost;
