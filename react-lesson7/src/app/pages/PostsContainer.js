import React from 'react';
import Posts from '../components/Posts';
import axios from 'axios';

export default class PostsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };

        axios.get(`https://jsonplaceholder.typicode.com/posts/`)
            .then(response => {
                this.setState({ posts: response.data })
            })
    }
    render() {
        return (
            <div>
                {!this.props.children ?
                    (<Posts posts={this.state.posts} />)
                    :
                    !this.props.children}
            </div>

        );
    }
}