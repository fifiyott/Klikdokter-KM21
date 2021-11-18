import { ERROR, USER_LOGIN, USER_LOGOUT } from "./Types";

const initialState = {
    user: null,
    loading: false,
}

export default function LoginReducers(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                user: action.payload,
                loading: false
            };
        case USER_LOGOUT:
            return {
                ...state,
                user: null
            }
        case ERROR:
            return {
                ...state,
                errors: action.payload,
                loading: false
            }
        
            default:
                return state;
    }
}