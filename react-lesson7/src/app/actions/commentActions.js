import axios from 'axios';

export function fetchComments() {
    return function (dispatch) {
        dispatch({ type: 'FETCH_COMMENTS_PENDING' });

        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                dispatch({
                    type: 'FETCH_COMMENTS_FULFILLED',
                    payload: response.data
                });
            })
            .catch((error) => {
                dispatch({
                    type: 'FETCH_COMMENTS_REJECTED',
                    payload: error
                });
            })
    }
}

export function fetchComment(id) {
    return function (dispatch) {
        dispatch({ type: 'FETCH_COMMENT_PENDING' });

        axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
            .then(response => {
                dispatch({
                    type: 'FETCH_COMMENT_FULFILLED',
                    payload: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: 'FETCH_COMMENT_REJECTED',
                    payload: error
                });
            })
    }
}