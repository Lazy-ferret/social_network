import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

export default function MyPosts() {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
            <div className={s.posts}>
                <Post message="Hi, how are you?" likecounts='5' />
                <Post message="It's my first post" likecounts='15' />

            </div>
        </div>
    )
}