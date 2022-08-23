import React from 'react'
import { addMessageCreator, udpateNewMessageTextCreator } from '../../redux/dialogsReducer'
import StoreContext from '../../storeContext'
import Dialogs from './Dialogs'


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage

                    const onMessageSend = () => {
                        store.dispatch(addMessageCreator())
                    }

                    const onMessageChange = (text) => {
                        const action = udpateNewMessageTextCreator(text)
                        store.dispatch(action)
                    }
                    return (
                        <Dialogs
                            udpateNewMessageText={onMessageChange}
                            onMessageSend={onMessageSend}
                            dialogsPage={state} />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer