import React from 'react'
import { addMessageCreator, udpateNewMessageTextCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'


// const DialogsContainer = () => {

//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState().dialogsPage

//                     const onMessageSend = () => {
//                         store.dispatch(addMessageCreator())
//                     }

//                     const onMessageChange = (text) => {
//                         const action = udpateNewMessageTextCreator(text)
//                         store.dispatch(action)
//                     }
//                     return (
//                         <Dialogs
//                             udpateNewMessageText={onMessageChange}
//                             onMessageSend={onMessageSend}
//                             dialogsPage={state} />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage

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