let rerenderEntireTree = () => {
    console.log('state is changed')
}

const state = {
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
}

export const addPost = () => {
    const newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const addMessage = () => {
    const newMessage =  { 
        id: 5, 
        message: state.dialogsPage.newMessageText
     }
    state.dialogsPage.messages.push(newMessage) 
    state.dialogsPage.newMessageText = ''
    rerenderEntireTree(state)    
}

export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText    
    rerenderEntireTree(state)    
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state
