import React from 'react';
import Comment from '../components/Comment';
import axios from 'axios';

export default class CommentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: []
        };

        axios.get(`https://jsonplaceholder.typicode.com/comments/${this.props.params.commentId}`)
            .then(response => {
                this.setState({ comment: response.data })
            })
    }
    render() {
        return (
            <div>
                {this.state.comment && <Comment {...this.state.comment} />}
            </div>
        );
    }
}