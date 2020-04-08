import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <li className={s.item}>
            <img src="https://lamcdn.net/furfurmag.ru/post-cover/PYMgsmfOiI0s9C3k8dwZ8Q-default.jpg" alt="Аватарка Фредди" />
            {props.message}
            <div>
                <span>Like </span>{props.like}
            </div>
        </li>

    );
}

export default Post;