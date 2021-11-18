import { combineReducers } from 'redux';
import LoginReducers from './LoginReducers';
import UsersReducers from './UsersReducers';

export default combineReducers({
    Login: LoginReducers,
    Users: UsersReducers
})