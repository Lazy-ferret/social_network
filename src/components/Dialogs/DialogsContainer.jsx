import React from 'react'
import { addMessageCreator, udpateNewMessageTextCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage

    const onMessageSend = () => {
        props.store.dispatch(addMessageCreator())
    }

    const onMessageChange = (text) => {
        const action = udpateNewMessageTextCreator(text)
        props.store.dispatch(action)
    }

    return (
        <Dialogs
            udpateNewMessageText={onMessageChange}
            onMessageSend={onMessageSend}
            dialogsPage={state} />
    )
}

export default DialogsContainer