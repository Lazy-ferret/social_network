import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from './ProfileInfo.module.css'
// import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import userPhoto from './../../../assets/images/user.jpg'



const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoChanged = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div >
            <div>
                <img src='https://avatars.mds.yandex.net/i?id=0d179fbb661a0c4b1caa54cce39e5054-5449619-images-thumbs&n=13&exp=1' alt='' />
            </div>

            <div className={styles.description_block}>
                <img className={styles.profilePhoro} src={props.profile.photos.large || userPhoto} alt='profile_photo' />
                {props.isOwner && <input type='file' onChange={onMainPhotoChanged} />}
                <div className={styles.description}>
                    <div className={styles.name}>{props.profile.fullName}</div>
                    <div className={styles.about_me}>{props.profile.aboutMe}</div>
                    <div className={styles.contacts}></div>

                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                    {/* <ProfileStatus status={props.status} updateStatus={props.updateStatus} /> */}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo