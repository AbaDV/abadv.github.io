import React from 'react';
import PropTypes from 'prop-types';

class WelcomeModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = { modal: false }
        
        this.handleCloseButton = this.handleCloseButton.bind(this);
    }
    componentDidMount() {
        this.showModal();
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

    handleCloseButton() {
        this.hideModal();
    }

    render() {
        const isShow = this.state.modal;

        if (!isShow)
            return null;

        return <div>
            <p>Модальное окно</p>
            <button onClick={this.handleCloseButton}>Закрыть</button>
        </div>;
    }
}

WelcomeModal.propTypes = {

}

export default WelcomeModal;