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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem name='Alex' id='1' />
                <DialogItem name='Ksu' id='2' />
                <DialogItem name='Nickel' id='3' />
                <DialogItem name='Lisa' id='4' />
                <DialogItem name='Myshka' id='5' />
            </div>
            <div className={s.messages}>
                <Message message='Hi' />
                <Message message='How you are doing?' />
                <Message message='Oh shit' />
            </div>
        </div>
    )
}

export default Dialogs