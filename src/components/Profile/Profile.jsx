import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export default function Profile({posts}) {
        
    return (
        <div >
            <ProfileInfo />
            <MyPosts posts={posts}/>
        </div>
    )
}