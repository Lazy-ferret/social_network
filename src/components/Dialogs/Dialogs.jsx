import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>

        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {

    const dialogs = [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Ksu' },
        { id: 3, name: 'Nickel' },
        { id: 4, name: 'Lisa' },
        { id: 5, name: 'Myshka' }
    ]

    const messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you doing?' },
        { id: 3, message: 'Oh shit' }
    ]

    const dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    const messagesElements = messages.map(message => <Message message={message.message} />)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs