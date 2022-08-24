import React from "react";
import { addPostCreator, udpateNewPostTextCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from 'react-redux'


// function MyPostsContainer() {

//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState()

//                     const addPost = () => {
//                         store.dispatch(addPostCreator())
//                     }

//                     const onPostChange = (text) => {
//                         const action = udpateNewPostTextCreator(text)
//                         store.dispatch(action)
//                     }

//                     return (<MyPosts
//                         udpateNewPostText={onPostChange}
//                         addPost={addPost}
//                         posts={state.profilePage.posts}
//                         newPostText={state.profilePage.newPostText} />)
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        udpateNewPostText: (text) => {
            const action = udpateNewPostTextCreator(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer