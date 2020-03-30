import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {

    let postsElements = props.posts.map(m => <Post message={m.message} like={m.likesCount} id={m.id} />)


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