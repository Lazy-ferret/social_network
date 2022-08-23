import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

export default function MyPosts(props) {

    const postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id} />)

    const newPostElement = React.createRef()

    const onAddPostClick = () => {
        props.addPost()
    }

    const onPostChange = () => {
        let text = newPostElement.current.value
        props.udpateNewPostText(text)
    }

    return (
        <div className={s.posts_block}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        value={props.newPostText}
                        onChange={onPostChange} />
                </div>
                <div>
                    <button onClick={onAddPostClick}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}