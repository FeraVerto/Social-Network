import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <li className={s.item}>
            <img src="https://34travel.me/media/posts/5a041b2b95800-darth.jpg" alt="Аватарка Дарт Вейдер" />
            {props.message}
            <div>
                <span>Like </span>{props.like}
            </div>
        </li>

    );
}

export default Post;