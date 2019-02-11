import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './app/layouts/Layout';
import MainPage from './app/pages/Main';
import Users from './app/pages/Users';
import User from './app/pages/User';
import PageNotFound from './app/pages/PageNotFound';
import PostsContainer from './app/pages/PostsContainer';
import PostContainer from './app/pages/PostContainer';
import CommentsContainer from './app/pages/CommentsContainer';
import CommentContainer from './app/pages/CommentContainer';


const app = document.querySelector('#root');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={MainPage} />
            <Route path="users" component={Users} />
            <Route path="users/:userId" component={User} />
            <Route path="posts" component={PostsContainer} />
            <Route path="posts/:postId" component={PostContainer} />
            <Route path="comments" component={CommentsContainer} />
            <Route path="comments/:commentId" component={CommentContainer} />

            <Route path="*" component={PageNotFound} />
        </Route>
    </Router>,
    app);