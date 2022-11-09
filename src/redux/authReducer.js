import { authAPI } from "../api/api"

const SET_USER_DATA = 'social-network/auth/SET_USER_DATA'
const SET_ERROR = 'social-network/auth/SET_ERROR'

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    error: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
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

export const getAuthUserData = () => async (dispatch) => {
    const response = await authAPI.authMe()

    if (response.resultCode === 0) {
        let { id, email, login } = response.data
        dispatch(setAuthUserData(id, email, login, true, null))
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    }
    if (response.data.resultCode !== 0) {
        const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(setError(message))
    }
}

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false, null))
    }
}

export default authReducer


