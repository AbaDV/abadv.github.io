import React from 'react';
import Post from './Post';

export default class Posts extends React.Component {
    render() {
        const { posts } = this.props;

        if (!posts.length) {
            return null;
        }

        const postsItems = posts.map((post, index) => {
            return <Post key={index} {...post} />
        });

        return (
            <div>
                <h1>Посты</h1>
                {postsItems}
            </div>
        );
    }
}