const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const DELETE_USERS = 'DELETE_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS:
            return {
                ...state, users: action.users
            }

        case DELETE_USERS:
            return {
                ...state, users: []
            }

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }

        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount }

        default:
            return state
    }
}


export const followCreator = (userId) => ({ type: FOLLOW, userId })
export const unfollowCreator = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersCreator = (users) => ({ type: SET_USERS, users })
export const deleteUsersCreator = () => ({ type: DELETE_USERS })
export const setCurrentPageCreator = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCountCreator = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })




export default usersReducer

