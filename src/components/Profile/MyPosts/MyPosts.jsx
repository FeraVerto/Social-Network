import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';


const MyPosts = (props) => {

    let postsElements = props.state.posts.map(m => <Post message={m.message} like={m.likesCount} id={m.id} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.postsBlockAdd}>
                <div className={s.postsBlock1}>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.state.newPostText} />
                </div>
                <div className={s.postsBlock2}>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <ul className={s.posts}>
                {postsElements}
            </ul>
        </div>
    );
}

export default MyPosts;