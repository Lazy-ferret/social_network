const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 5 },
        { id: 2, message: "It's my first post", likesCount: 15 },
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case ADD_POST:
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }

        default:
            return state
    }
}

export default profileReducer

export const addPostCreator = () => ({ type: ADD_POST })

export const udpateNewPostTextCreator = (text) =>
({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

