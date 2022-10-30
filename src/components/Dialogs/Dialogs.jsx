import React from 'react'
import { Field, Form } from 'react-final-form'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {

    const state = props.dialogsPage

    const dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)
    const messagesElements = state.messages.map(message => <Message message={message.message} key={message.id} />)
    // const newMessageText = state.newMessageText

    // const onInputChange = (e) => {
    //     let text = e.target.value
    //     props.udpateNewMessageText(text)
    // }

    // const onAddNewMessageClick = () => {
    //     props.onMessageSend()
    // }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageForm {...props} />

            </div>
        </div>
    )
}

const AddMessageForm = (props) => {

    const onAddNewMessageClick = (values) => {
        props.onMessageSend(values.newMessageText)
        values.newMessageText = ''
    }

    return (
        <Form
            initialValues={{
                newMessageText: ''
            }}
            onSubmit={onAddNewMessageClick}
        >
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>

                    <div>
                        <Field component={'textarea'}
                            name={'newMessageText'}
                            placeholder={'Enter your message'}
                        />
                    </div>
                    <div>
                        <button>Send</button>
                    </div>

                </form>
            )}
        </Form>

    )
}

export default Dialogs