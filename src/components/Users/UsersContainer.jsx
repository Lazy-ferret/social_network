import React from 'react'
import { connect } from 'react-redux'
import { deleteUsersCreator, followCreator, setUsersCreator, unfollowCreator } from '../../redux/usersReducer'
// import Users from './Users'
import Users from './UsersClassComponent'

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
        }, 
        deleteUsers: () => {
            dispatch(deleteUsersCreator())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)