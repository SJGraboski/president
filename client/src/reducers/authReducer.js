import c from '../constants/actionTypes';

const initialState = {
    loggedIn: localStorage.getItem('token') ? true : false,
    username: localStorage.getItem('username') ? localStorage.getItem('username') : '',
}

export default (state = initialState, action) => {
    var updated = Object.assign({}, state);

    switch(action.type) {
        case c.USER_REGISTERED:
            updated.loggedIn = true;
            updated.username = action.username;
            return updated;
        case c.USER_LOGGEDIN:
            updated.loggedIn = true;
            updated.username = action.username;
            return updated;
        case c.USER_LOGOUT:
            updated.loggedIn = false;
            updated.username = '';
            return updated;
        default:
            return state;
    }
}