import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css'

export default function Profile() {
    return (
        <div className={s.content}>
            <div>
                <img src='https://avatars.mds.yandex.net/i?id=0d179fbb661a0c4b1caa54cce39e5054-5449619-images-thumbs&n=13&exp=1' />
            </div>

            <div>
                ava + description
            </div>

            <MyPosts />


            

        </div>
    )
}