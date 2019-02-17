import React from 'react';
import Comments from '../components/Comments';
import { connect } from 'react-redux';

import { fetchComments } from "../actions/commentActions";

class CommentsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { fetchComments } = this.props;
        if (fetchComments) {
            fetchComments();
        }
    }

    render() {
        return (
            <div>
                {!this.props.children ?
                    (<Comments comments={this.props.comments}/>)
                    :
                    !this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comments,
    }
}

export default connect(mapStateToProps, { fetchComments })(CommentsContainer);