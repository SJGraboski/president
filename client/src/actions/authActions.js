import c from '../constants/actionTypes';
import Axios from 'axios';

function userLoggedIn(username) {
    return {
        type: c.USER_REGISTERED,
        username: username
    }
}

function userRegistered(username) {
    return {
        type: c.USER_LOGGEDIN,
        username: username
    }
}

function logout() {
    return {
        type: c.USER_LOGOUT
    }
}

export function submitLogin(data) {
    return dispatch => {
        return Axios.post(`/user/${data.username}`)
        .then(({data}) => {
            localStorage.setItem('username', data.data.username);
            localStorage.setItem('token', data.data.tokenID);
            dispatch(userLoggedIn(data.data.username));
        })
        .catch(e => console.log(e));
    }
}

export function submitRegister(data) {
    return dispatch => {
        return Axios.post('/register', data)
        .then(({data}) => {
            localStorage.setItem('username', data.data.username);
            localStorage.setItem('token', data.data.tokenID);
            dispatch(userRegistered(data.data.username));
        })
        .catch(e => console.log(e));
    }
}

export function logoutUser() {
    return dispatch => {
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        dispatch(logout());
    }
}