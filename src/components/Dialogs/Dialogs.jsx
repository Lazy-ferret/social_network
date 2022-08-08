import React from 'react'
import s from './Dialogs.module.css'

export default function Dialogs() {

    return (

        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <div className={s.dialog + ' ' + s.active}>
                    Alex
                </div>
                <div className={s.dialog}>
                    Ksu
                </div>
                <div className={s.dialog}>
                    Lisa
                </div>
                <div className={s.dialog}>
                    Myshka
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you doing?</div>
                <div className={s.message}>Oh shit</div>
                
            </div>
        </div>
    )
}
