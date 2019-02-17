import React from 'react';
import Posts from '../components/Posts';
import { connect } from 'react-redux';

import { fetchPosts } from "../actions/postActions";

class PostsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { fetchPosts } = this.props;
        if (fetchPosts) {
            fetchPosts();
        }
    }

    render() {
        return (
            <div>
                {!this.props.children ?
                    (<Posts posts={this.props.posts} />)
                    :
                    !this.props.children}
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);