import React from 'react';
import Post from '../components/Post';
import { connect } from 'react-redux';

import { fetchPost } from "../actions/postActions";

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { fetchPost, params } = this.props;
        if (fetchPost) {
            fetchPost(params.postId);
        }
    }
    
    render() {
        return (
            <div>
                {this.props.post && <Post {...this.props.post} />}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.post,
    }
}

export default connect(mapStateToProps, { fetchPost })(PostContainer);