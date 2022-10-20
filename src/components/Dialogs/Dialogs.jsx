import React from 'react'
import { Navigate } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {

    const state = props.dialogsPage

    const dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)
    const messagesElements = state.messages.map(message => <Message message={message.message} key={message.id} />)
    const newMessageText = state.newMessageText

    const onInputChange = (e) => {
        let text = e.target.value
        props.udpateNewMessageText(text)
    }

    const onAddNewMessageClick = () => {
        props.onMessageSend()
    }

    if (!props.isAuth) return <Navigate to={'/login'} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>

                <div>
                    <div>
                        <textarea
                            value={newMessageText}
                            onChange={onInputChange} />
                    </div>
                    <div>
                        <button onClick={onAddNewMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs