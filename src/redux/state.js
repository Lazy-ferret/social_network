const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 5 },
                { id: 2, message: "It's my first post", likesCount: 15 },
            ],
            newPostText: ''
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
            ],
            newMessageText: ''
        }
    },

    _callSubscriber() {
        console.log('state is changed')
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === ADD_MESSAGE) {
            const newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

export const addPostCreator = () => ({ type: ADD_POST })

export const udpateNewPostTextCreator = (text) =>
({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export const addMessageCreator = () => ({ type: ADD_MESSAGE })

export const udpateNewMessageTextCreator = (text) =>
({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
})

export default store
window.store = store
