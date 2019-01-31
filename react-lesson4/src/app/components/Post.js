import React from 'react';
import PropTypes from 'prop-types';

class Post extends React.Component {
    render() {
        const { post } = this.props;

        return <div>
            <h4>{p.title}</h4>
            <p>{post.text}</p>
        </div>;
    }
}

Post.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string,
    }),
}

export default Post;