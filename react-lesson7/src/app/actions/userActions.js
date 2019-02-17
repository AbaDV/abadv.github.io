import axios from 'axios';

export function fetchUsers() {
    return function (dispatch) {
        dispatch({ type: 'FETCH_USERS_PENDING' });

        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                dispatch({
                    type: 'FETCH_USERS_FULFILLED',
                    payload: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: 'FETCH_USERS_REJECTED',
                    payload: error
                });
            })
    }
}

export function fetchUser(id) {
    return function (dispatch) {
        dispatch({ type: 'FETCH_USER_PENDING' });

        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                dispatch({
                    type: 'FETCH_USER_FULFILLED',
                    payload: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: 'FETCH_USER_REJECTED',
                    payload: error
                });
            })
    }
}