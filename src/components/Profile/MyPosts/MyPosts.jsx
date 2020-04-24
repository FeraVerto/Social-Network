import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map(m => <Post message={m.message} like={m.likesCount} id={m.id} />)
   
    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.postsBlockAdd}>
                <div className={s.postsBlock1}>
                    <textarea onChange={onPostChange} 
                                
                                value={props.newPostText} 
                                placeholder='Hi, how are you sleep?' />
                </div>
                <div className={s.postsBlock2}>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <ul className={s.posts}>
                {postsElements}
            </ul>
        </div>
    );
}

export default MyPosts;