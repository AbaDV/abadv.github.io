import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import promise from "redux-promise-middleware";

const initialState = {
    fetching: false,
    fetched: false,
    error: null,

    user: undefined,
    users: [],

    post: undefined,
    posts: [],

    comment: undefined,
    comments: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // Users
        case "FETCH_USER_PENDING": {
            return { ...state, fetching: true };
            break;
        }
        case "FETCH_USER_REJECTED": {
            return { ...state, fetching: false, error: action.payload }
            break;
        }
        case "FETCH_USER_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                user: action.payload
            };
            break;
        }        
        case "FETCH_USER_PENDING": {
            return { ...state, fetching: true };
            break;
        }

        case "FETCH_USERS_REJECTED": {
            return { ...state, fetching: false, error: action.payload }
            break;
        }
        case "FETCH_USERS_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                users: action.payload
            };
            break;
        }
        // Posts
        case "FETCH_POST_PENDING": {
            return { ...state, fetching: true };
            break;
        }
        case "FETCH_POST_REJECTED": {
            return { ...state, fetching: false, error: action.payload }
            break;
        }
        case "FETCH_POST_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                post: action.payload
            };
            break;
        }

        case "FETCH_POSTS_PENDING": {
            return { ...state, fetching: true };
            break;
        }
        case "FETCH_POSTS_REJECTED": {
            return { ...state, fetching: false, error: action.payload }
            break;
        }
        case "FETCH_POSTS_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                posts: action.payload
            };
            break;
        }
        // Comments
        case "FETCH_COMMENT_PENDING": {
            return { ...state, fetching: true };
            break;
        }
        case "FETCH_COMMENT_REJECTED": {
            return { ...state, fetching: false, error: action.payload }
            break;
        }
        case "FETCH_COMMENT_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                comment: action.payload
            };
            break;
        }

        case "FETCH_COMMENTS_PENDING": {
            return { ...state, fetching: true };
            break;
        }
        case "FETCH_COMMENTS_REJECTED": {
            return { ...state, fetching: false, error: action.payload }
            break;
        }
        case "FETCH_COMMENTS_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                comments: action.payload
            };
            break;
        }
    }
    return state;
}
const logger = createLogger({
    // ...options
});
const middleware = applyMiddleware(promise, thunk, logger);
const store = createStore(reducer, middleware);

export default store;