import React from 'react'
import { connect } from 'react-redux'
import { deleteUsersCreator, followCreator, setCurrentPageCreator, setTotalUsersCountCreator, setUsersCreator, unfollowCreator } from '../../redux/usersReducer'
// import Users from './Users'
import Users from './UsersClassComponent'

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users, 
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        }, 
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageCreator(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountCreator(totalCount))
        }
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)