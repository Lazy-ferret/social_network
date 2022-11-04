import { authAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'
const SET_ERROR = 'SET_ERROR'

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    error: null
    // isAuth: true
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                // isAuth: true
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.error
            }

        default:
            return state
    }
}

export const setError = (error) => ({ type: SET_ERROR, error })


export const setAuthUserData = (userId, email, login, isAuth, error) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth, error } })

export const getAuthUserData = () => (dispatch) => {
    return authAPI.authMe()
        .then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data
                dispatch(setAuthUserData(id, email, login, true, null))
            }
        })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())

            }
            if (response.data.resultCode !== 0) {
                const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                dispatch(setError(message))
            }
        })
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false, null))
            }
        })
}


export default authReducer


