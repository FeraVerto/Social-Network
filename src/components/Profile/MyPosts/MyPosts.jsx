import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const postsData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 20},
    {id: 2, message: 'It\'s my first post', likesCount: 15}
]

let postsElements = postsData
    .map( m => <Post message={m.message} like={m.likesCount} id={postsData[0].id} /> )

const MyPosts = () => {
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <ul className={s.posts}>
                { postsElements }
            </ul>
        </div>
    );
}

export default MyPosts;