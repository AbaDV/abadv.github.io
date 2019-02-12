import React from 'react';
import { Link } from 'react-router';

export default class User extends React.Component {
    render() {
        return (
            <div>
                <div className="card border-secondary mb-3"></div>
                <div className="card-header">
                    <Link to={`/users/${this.props.id}`}>
                        {this.props.username}
                    </Link>
                </div>
                <div className="card-body text-secondary">

                    <p>{this.props.name}</p>
                    <p>{this.props.email}</p>
                    <p>{this.props.phone}</p>
                    <p>{this.props.website}</p>
                </div>
            </div>
        );
    }
}