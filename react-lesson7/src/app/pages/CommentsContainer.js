import React from 'react';
import Comments from '../components/Comments';
import axios from 'axios';

export default class CommentsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };

        axios.get(`https://jsonplaceholder.typicode.com/comments/`)
            .then(response => {
                this.setState({ comments: response.data })
            })
    }
    render() {
        return (
            <div>
                {!this.props.children ?
                    (<Comments comments={this.state.comments}/>)
                    :
                    !this.props.children}
            </div>
        );
    }
}