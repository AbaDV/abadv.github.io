import React from 'react';
import PropTypes from 'prop-types';

class WelcomeModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = { modal: false }
    }
    componentDidMount() {

    }

    showModal() {
        this.setState({
            modal: true
        });
    }

    hideModal() {
        this.setState({
            modal: false
        });
    }

    close() {
        this.hideModal();
    }

    render() {
        return <div>
            <p>Модальное окно</p>
            <button onClick={this.close}>Закрыть</button>
        </div>;
    }
}

WelcomeModal.propTypes = {

}

export default WelcomeModal;