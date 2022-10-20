import React from 'react'
import { addMessageCreator, udpateNewMessageTextCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/WithAuthRedirect'
import { compose } from 'redux'


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        udpateNewMessageText: (text) => {
            dispatch(udpateNewMessageTextCreator(text))
        },
        onMessageSend: () => { dispatch(addMessageCreator()) }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
    )(Dialogs)