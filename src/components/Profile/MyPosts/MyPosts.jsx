import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

export default function MyPosts() {
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
                <Post message="Hi, how are you?" likecounts='5' />
                <Post message="It's my first post" likecounts='15' />

            </div>
        </div>
    )
}