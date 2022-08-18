const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 5,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state
        default: 
            return state
    }
}

export default dialogsReducer

export const addMessageCreator = () => ({ type: ADD_MESSAGE })

export const udpateNewMessageTextCreator = (text) =>
({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
})
