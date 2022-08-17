import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {
    const { messages, dialogs, newMessageText } = props.state

    const dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)

    const messagesElements = messages.map(message => <Message message={message.message} key={message.id} />)

    const newMsgElement = React.createRef()

    const onMessageChange = () => {
        let text = newMsgElement.current.value
        props.updateNewMessageText(text)
    }

    const addNewMessage = () => {
        props.addMessage()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}

                <div>
                    <div>
                        <textarea
                         ref={newMsgElement}
                         value={newMessageText}
                         onChange={onMessageChange} />
                    </div>
                    <div>
                        <button onClick={addNewMessage}>Add post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs