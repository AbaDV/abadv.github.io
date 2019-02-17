import React from 'react';
import User from '../components/User';
import { connect } from 'react-redux';

import { fetchUser } from "../actions/userActions";

class UserContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { fetchUser, params } = this.props;
        if (fetchUser) {
            fetchUser(params.userId);
        }
    }

    render() {
        return (
            <div>
                {this.props.user && <User {...this.props.user} />}
            </div>
        );
        // if (!this.state.user)
        //     return null;

        // return <UserProfile {...this.state.user} />;
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps, { fetchUser })(UserContainer);