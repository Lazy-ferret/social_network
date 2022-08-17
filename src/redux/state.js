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
    
    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log('state is changed')
    },

    addPost() {
        const newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    addMessage() {
        const newMessage = {
            id: 5,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber(this._state)
    },

    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText
        this._callSubscriber(this._state)
    },

    subscribe(observer) {
        this._callSubscriber = observer
    }

}

export default store
window.store = store
