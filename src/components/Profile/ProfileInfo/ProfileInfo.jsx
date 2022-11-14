import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from './ProfileInfo.module.css'
// import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import userPhoto from './../../../assets/images/user.jpg'
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({ profile, savePhoto, isOwner, status, updateStatus, updateProfile, error }) => {
    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoChanged = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const saveFormData = (formData) => {
        updateProfile(formData)
            .then(() => setEditMode(false))
    }

    return (
        <div >
            <div>
                <img src='https://avatars.mds.yandex.net/i?id=0d179fbb661a0c4b1caa54cce39e5054-5449619-images-thumbs&n=13&exp=1' alt='' />
            </div>

            <div >
                <img className={styles.profilePhoro} src={profile.photos.large || userPhoto} alt='profile_photo' />
                {isOwner && <input type='file' onChange={onMainPhotoChanged} />}
                {editMode
                    ? <ProfileDataForm
                        profile={profile}
                        saveFormData={saveFormData}
                        error={error} />
                    : <ProfileData profile={profile}
                        isOwner={isOwner}
                        toEditMode={() => setEditMode(true)} />}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                {/* <ProfileStatus status={props.status} updateStatus={props.updateStatus} /> */}
            </div>
        </div>
    )
}

const ProfileData = ({ profile, isOwner, toEditMode }) => {
    return (
        <div className={styles.description}>
            <div className={styles.name}>{profile.fullName}</div>

            {profile.aboutMe && <div>
                {<span><b>About me:</b>{profile.aboutMe}</span>}
            </div>}

            <div>
                {<span><b>Open to work:</b>{profile.lookingForAJob ? 'YES' : 'NO'}</span>}
            </div>

            {profile.lookingForAJob && profile.lookingForAJobDescription &&
                <span><b>My skills:</b>{profile.lookingForAJobDescription}</span>
            }

            <div className={styles.contacts}>
                <b>Contacts:</b>
                {Object.keys(profile.contacts).map(key => {
                    return profile.contacts[key] && <Contact key={key}
                        contactTitle={key}
                        contactValue={profile.contacts[key]} />
                })}
            </div>
            {isOwner && <div><button onClick={toEditMode}>edit</button></div>}
        </div>
    )
}

const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div>
            <b>{contactTitle}:</b>
            <span>{contactValue}</span>
        </div>
    )
}

export default ProfileInfo