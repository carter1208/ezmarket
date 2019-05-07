/**
 * Created by loc on 8/9/2017.
 */
import React, {Component, PropTypes} from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

export default class Diaglog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: this.props.isOpen
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }
    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        return (
            <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel=""
            >
                <div className="btn-close-dialog" onClick={this.closeModal.bind(this)}><i className="fa fa-window-close"></i> </div>
                {this.props.children}
            </Modal>
        )
    }
}
