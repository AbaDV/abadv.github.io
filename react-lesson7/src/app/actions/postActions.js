import axios from 'axios';

export function fetchPosts() {
    return function (dispatch) {
        dispatch({ type: 'FETCH_POSTS_PENDING' });

        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                dispatch({
                    type: 'FETCH_POSTS_FULFILLED',
                    payload: response.data
                });
            })
            .catch((error) => {
                dispatch({
                    type: 'FETCH_POSTS_REJECTED',
                    payload: error
                });
            })
    }
}

export function fetchPost(id) {
    return function (dispatch) {
        dispatch({ type: 'FETCH_POST_PENDING' });

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                dispatch({
                    type: 'FETCH_POST_FULFILLED',
                    payload: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: 'FETCH_POST_REJECTED',
                    payload: error
                });
            })
    }
}