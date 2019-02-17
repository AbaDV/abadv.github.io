
import React from 'react';
import UsersList from '../components/UsersList';
import { connect } from 'react-redux';

import { fetchUsers } from "../actions/userActions";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { fetchUsers } = this.props;
        if (fetchUsers) {
            fetchUsers();
        }
    }

    render() {
        return (
            <div>
                {!this.props.children ?
                    (<UsersList users={this.props.users} />)
                    :
                    !this.props.children}
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users,
    }
}

export default connect(mapStateToProps, { fetchUsers })(UsersContainer);