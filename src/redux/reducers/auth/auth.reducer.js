import types from './auth.types'

const initial_state = {
    user: null,
    token: "",
    pending: false,
    errors: null
}
const authReducer = (state = initial_state, {type, payload}) => {
    switch (type) {
        case (types.LOGIN_START):
            return {
                ...state,
                pending: true,
                errors: null,
            }

        case (types.LOGIN_SUCCESS):
            return {
                ...state,
                pending: false,
                user: payload.user,
                token: payload.token
            }

        case (types.LOGIN_FAIL):
            return {
                ...state,
                pending: false,
                errors: payload,
            }
        default:
            return state
    }
}
export default authReducer;