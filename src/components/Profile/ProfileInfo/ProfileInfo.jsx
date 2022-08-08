import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img src='https://avatars.mds.yandex.net/i?id=0d179fbb661a0c4b1caa54cce39e5054-5449619-images-thumbs&n=13&exp=1' />
            </div>

            <div className={s.description_block}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo