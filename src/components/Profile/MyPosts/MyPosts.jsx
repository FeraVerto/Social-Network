import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';

const MyPosts = (props) => {

    let postsElements = props.posts.map(m => <Post message={m.message} like={m.likesCount} id={m.id} />)

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostFormRadux onSubmit={addNewPost} />

            <ul className={s.posts}>
                {postsElements}
            </ul>
        </div>
    );
}

const AddPostsForm = (props) => {
    return (
        <form className={s.postsBlockAdd} onSubmit={props.handleSubmit}>
            <div className={s.postsBlock1}>
                <Field component='textarea' name='newPostText' placeholder='Hi, how are you sleep?' />
            </div>
            <div className={s.postsBlock2}>
                <button> Add post </button>
            </div>
        </form>
    )
}

const AddPostFormRadux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddPostsForm);

export default MyPosts;