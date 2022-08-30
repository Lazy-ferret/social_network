import React from 'react'
import { connect } from 'react-redux'
import { followCreator, setUsersCreator, unfollowCreator } from '../../redux/usersReducer'
import Users from './Users'

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersCreator(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)