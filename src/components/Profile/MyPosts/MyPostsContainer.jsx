import React from "react";
import { addPostCreator, udpateNewPostTextCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

function MyPostsContainer(props) {

    let state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostCreator())
    }

    const onPostChange = (text) => {
        const action = udpateNewPostTextCreator(text)
        props.store.dispatch(action)
    }

    return (
        <MyPosts
            udpateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText} />
    )
}

export default MyPostsContainer