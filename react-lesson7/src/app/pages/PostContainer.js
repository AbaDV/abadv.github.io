import React from 'react';
import Post from '../components/Post';
import axios from 'axios';

export default class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: []
        };

        console.log('props.params: ', this.props.params);
        

        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.params.postId}`)
            .then(response => {
                this.setState({ post: response.data })
            })
    }
    render() {
        return (
            <div>
                {this.state.post && <Post {...this.state.post} />}
            </div>
        );
    }
}