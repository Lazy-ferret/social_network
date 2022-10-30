import React from "react";
import { Field, Form } from "react-final-form";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    const postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id} />)

    const onAddNewMessageClick = (values) => {
        props.addPost(values.newPostText)
        values.newPostText = ''
    }

    return (
        <div className={s.posts_block}>
            <h3>My posts</h3>
            <AddPostForm onSubmit={onAddNewMessageClick} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}


const AddPostForm = ({onSubmit}) => {
   
    return (
        <Form
            initialValues={{
                newPostText: ''
            }}
            onSubmit={onSubmit}
        >
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>

                    <div>
                        <Field component={'textarea'}
                            name={'newPostText'}
                            placeholder={'Enter your post text'}
                        />
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>

                </form>
            )}
        </Form>
    )
}

export default MyPosts
