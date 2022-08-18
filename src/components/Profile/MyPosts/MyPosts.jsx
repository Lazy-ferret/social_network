import React from "react";
import { addPostCreator, udpateNewPostTextCreator } from "../../../redux/profileReducer";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


export default function MyPosts(props) {

    const postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id} />)

    const newPostElement = React.createRef()

    const onAddNewPostClick = () => {
        props.dispatch(addPostCreator())
    }

    const onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(udpateNewPostTextCreator(text))
    }

    return (
        <div className={s.posts_block}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                        value={props.newPostText}
                        onChange={onPostChange} />
                </div>
                <div>
                    <button onClick={onAddNewPostClick}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}