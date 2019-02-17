import React from 'react';
import axios from 'axios';
import User from './User';

export default class UsersList extends React.Component {
    render() {
        const { users } = this.props;

        if (!users.length) {
            return null;
        }

        const usersList = users.map((user, index) => {
            return <User key={index} {...user} />
        });

        return (
            <div>
                <h1>Пользователи</h1>
                {usersList}
            </div>
        );
    }
}