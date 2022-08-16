import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {
    const { messages, dialogs } = props.state

    const dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)

    const messagesElements = messages.map(message => <Message message={message.message} key={message.id} />)

    const newMsgElement = React.createRef()

    const addNewMessage = () => {
        const text = newMsgElement.current.value
        alert(text)
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
                        <textarea ref={newMsgElement} placeholder='type new message'></textarea>
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