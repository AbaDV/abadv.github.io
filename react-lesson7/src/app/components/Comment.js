import React from 'react';
import { Link } from 'react-router';

export default class Comment extends React.Component {
    render() {
        return (
            <div>
                <div className="card border-secondary mb-3"></div>
                <div className="card-header">
                    <Link to={`/comments/${this.props.id}`}>
                        {this.props.name}
                    </Link>
                </div>
                <div className="card-body text-secondary">
                    <h6><i>{this.props.email}</i></h6>
                    <p>{this.props.body}</p>
                </div>
            </div>
        );
    }
}