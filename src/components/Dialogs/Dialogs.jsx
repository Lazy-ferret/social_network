import React from 'react'
import { addMessageCreator, udpateNewMessageTextCreator } from '../../redux/dialogsReducer'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {
    const { messages, dialogs, newMessageText } = props.state

    const dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)

    const messagesElements = messages.map(message => <Message message={message.message} key={message.id} />)

    // const newMsgElement = React.createRef()

    const onMessageChange = (e) => {
        let text = e.target.value
        props.dispatch(udpateNewMessageTextCreator(text))
    }

    const onAddNewMessageClick = () => {
        props.dispatch(addMessageCreator())
    }

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
                            // ref={newMsgElement}
                            value={newMessageText}
                            onChange={onMessageChange} />
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