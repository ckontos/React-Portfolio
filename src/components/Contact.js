import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileHeader from './MobileHeader';
import EmailModal from './EmailModal';
import helpers from '../utility/utils';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            error: '',
            emailSent: false
        }
    }

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    }

    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    }

    onMessageChange = (e) => {
        const message = e.target.value;
        this.setState(() => ({ message }));
    }

    handleCloseModal = () => {
        this.setState(() => ({ emailSent: false }));
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        if (!this.state.name || !this.state.email || !this.state.message) {
            this.setState(() => ({ error: 'Please fill out all of the fields below to send message!' }));
        } else {
            this.setState(() => ({ error: '' }));
            fetch('/contact', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                    message: this.state.message
                })
            })
                .catch((error) => console.error('Error:', error));
            this.setState(() => ({
                name: '',
                email: '',
                message: '',
                error: '',
                emailSent: true
            }));
        }

    }

    render() {
        return (
            <div className='contact-container'>
                <div className='desktop-header-container'><Header /></div>
                <div className='mobile-header-container'><MobileHeader /></div>
                <div onClick={helpers.navOutsideClick}>
                    <h1 className='contact__title'>Lets Connect!</h1>
                    <h4 className='contact__subtitle'>I will respond to all messages within 24 hours.</h4>
                    <div className='content-container'>
                        <form className='contact__form' onSubmit={this.onFormSubmit}>
                            {this.state.error && <p className='form__error'>*{this.state.error}</p>}
                            <input
                                className='text-input'
                                type='text'
                                name='name'
                                value={this.state.name}
                                placeholder='name'
                                onChange={this.onNameChange}
                            />
                            <input
                                className='text-input'
                                type='text' name='email'
                                value={this.state.email}
                                placeholder='email'
                                onChange={this.onEmailChange}
                            />
                            <textarea
                                className='textarea'
                                value={this.state.message}
                                placeholder='message'
                                onChange={this.onMessageChange}>
                            </textarea>
                            <div className='form-button-container'>
                                <button className='form-button' type='submit'>Send Message</button>
                            </div>
                        </form>
                        <EmailModal emailSent={this.state.emailSent} handleCloseModal={this.handleCloseModal} />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}