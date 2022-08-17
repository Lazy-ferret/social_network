import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export default function Profile(props) {

    return (
        <div >
            <ProfileInfo />
            <MyPosts
                posts={props.state.posts}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
                newPostText={props.state.newPostText}

            />
        </div>
    )
}