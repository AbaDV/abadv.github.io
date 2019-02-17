import React from 'react';
import Comment from '../components/Comment';
import { connect } from 'react-redux';

import { fetchComment } from "../actions/commentActions";

class CommentContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { fetchComment, params } = this.props;
        if (fetchComment) {
            fetchComment(params.commentId);
        }
    }

    render() {
        return (
            <div>
                {this.props.comment && <Comment {...this.props.comment} />}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        comment: state.comment,
    }
}

export default connect(mapStateToProps, { fetchComment })(CommentContainer);