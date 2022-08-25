const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const initialState = {
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

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            const newMessage = {
                id: 5,
                message: state.newMessageText
            }
            const stateCopy = { ...state }
            stateCopy.messages.push(newMessage)
            stateCopy.newMessageText = ''
            return stateCopy
        }

        case UPDATE_NEW_MESSAGE_TEXT: {
            const stateCopy = { ...state }
            stateCopy.newMessageText = action.newText
            return stateCopy
        }

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
