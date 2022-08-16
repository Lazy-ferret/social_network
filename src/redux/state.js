import { rerenderEntireTree } from "../render"

const state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 5 },
            { id: 2, message: "It's my first post", likesCount: 15 },
        ]
    },
    dialogsPage: {
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are you doing?' },
            { id: 3, message: 'Oh shit' }
        ],
        dialogs: [
            { id: 1, name: 'Alex' },
            { id: 2, name: 'Ksu' },
            { id: 3, name: 'Nickel' },
            { id: 4, name: 'Lisa' },
            { id: 5, name: 'Myshka' }
        ]
    }
}

export const addPost = (postMessage) => {
    
    const newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
    
}

export default state
