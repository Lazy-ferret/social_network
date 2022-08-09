import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

export default function MyPosts() {
    const posts = [
        { id: 1, message: 'Hi, how are you?', likesCount: 5 },
        { id: 2, message: "It's my first post", likesCount: 15 },
    ]

    const postsElements = posts.map(post => <Post message={post.message} likesCount={post.likesCount} />
    )

    return (
        <div className={s.posts_block}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}