import React from 'react';
import Modal from 'react-modal';

const EmailModal = (props) => (
    <Modal className='modal' isOpen={props.emailSent} contentLabel="Message Sending" onRequestClose={props.handleCloseModal} closeTimeoutMS={200} className='modal'>
        <img className='success__image' src='/images/check.gif' />
        <h3>Message Sent!</h3>
        <button className='modal-button' onClick={props.handleCloseModal}>Close</button>
    </Modal>
);

export default EmailModal;