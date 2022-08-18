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
        if (action.type === 'ADD-POST') {
            const newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === 'ADD-MESSAGE') {
            const newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber(this._state)
        }
    },

    // addPost() {
    //     const newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this._callSubscriber(this._state)
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText
    //     this._callSubscriber(this._state)
    // },
    // addMessage() {
    //     const newMessage = {
    //         id: 5,
    //         message: this._state.dialogsPage.newMessageText
    //     }
    //     this._state.dialogsPage.messages.push(newMessage)
    //     this._state.dialogsPage.newMessageText = ''
    //     this._callSubscriber(this._state)
    // },

    // updateNewMessageText(newText) {
    //     this._state.dialogsPage.newMessageText = newText
    //     this._callSubscriber(this._state)
    // },



}

export default store
window.store = store
