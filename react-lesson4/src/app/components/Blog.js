import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

class Blog extends React.Component {
    render() {
        const { posts } = this.props;

        const postItems = posts.map((p) => {
            return <li key={p.id}>
                <Post post={p} />
            </li>
        });

        return <div>
            <ul>
                {postItems}
            </ul>
        </div>;
    }
}

Blog.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            text: PropTypes.string,
        })),
}

export default Blog;