import React from 'react'
import { addMessageCreator, udpateNewMessageTextCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage, 
        isAuth: state.auth.isAuth

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        udpateNewMessageText: (text) => {
            dispatch(udpateNewMessageTextCreator(text))
        }, 
        onMessageSend: () => { dispatch(addMessageCreator())}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer