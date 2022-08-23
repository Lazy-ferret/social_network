import React from "react";
import { addPostCreator, udpateNewPostTextCreator } from "../../../redux/profileReducer";
import StoreContext from "../../../storeContext";
import MyPosts from "./MyPosts";

function MyPostsContainer() {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    const addPost = () => {
                        store.dispatch(addPostCreator())
                    }

                    const onPostChange = (text) => {
                        const action = udpateNewPostTextCreator(text)
                        store.dispatch(action)
                    }

                    return (<MyPosts
                        udpateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText} />)
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer