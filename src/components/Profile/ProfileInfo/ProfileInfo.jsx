import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div >
            <div>
                <img src='https://avatars.mds.yandex.net/i?id=0d179fbb661a0c4b1caa54cce39e5054-5449619-images-thumbs&n=13&exp=1' alt=''/>
            </div>

            <div className={styles.description_block}>
                <img src={props.profile.photos.large} alt='profile_photo'/>
                <div className={styles.description}>
                    <div className={styles.about_me}>{props.profile.aboutMe}</div>
                    <div className={styles.contacts}></div>
                </div>
            </div>

        </div>
    )
}

export default ProfileInfo