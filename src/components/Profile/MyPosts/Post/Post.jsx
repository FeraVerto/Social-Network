import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <li className={s.item}>
            <div className={s.itemLike}>
                <img src="https://lamcdn.net/furfurmag.ru/post-cover/PYMgsmfOiI0s9C3k8dwZ8Q-default.jpg" alt="Аватарка Фредди" />
                <span className={s.like}>Like {props.like}</span>
            </div>
            <div className={s.itemPost}>
                {props.message}
            </div>
            
        </li>
    );
}

export default Post;