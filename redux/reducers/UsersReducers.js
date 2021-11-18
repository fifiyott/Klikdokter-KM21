import { ERROR, GET_USERS, ADD_USERS, DELETE_USERS } from "./Types";

const initialStatte = {
    users: [],
    user: {},
    loading: true
}

export default function UsersReducers(state = initialStatte, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case ADD_USERS:
            return {
                ...state,
                users: state.users.concat(action.payload),
                loading: false,
            };

        case DELETE_USERS:
            const filteredState = state.users.filter(
                (user) => Number(user.id) !== Number(action.payload.id)
            );
            return { ...state, users: filteredState };
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