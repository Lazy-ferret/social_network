import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

export default function MyPosts({ posts }) {
    const postsElements = posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id} />
    )

const newPostElement = React.createRef()

    const addPost = () => {
        let text = newPostElement.current.value
        alert(text)
    }

    return (
        <div className={s.posts_block}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}