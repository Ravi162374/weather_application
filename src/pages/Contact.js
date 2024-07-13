import React from 'react';
import '../styles/contact.css'; // Ensure you have a corresponding CSS file for styling

function Contact() {
    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <address>
                <label>Email: </label>
                <a href="mailto:mkravi464@gmail.com">mkravi464@gmail.com</a><br />
                <label>Phone: </label>
                <a href="tel:+1234567890">+91 7981402374</a><br />
                <label>Address:</label>
                <p>Hyderabad</p>
            </address>
            <h2>Send Us a Message</h2>
            <form className="contact-form">
                <div>
                    <label>Name:</label><br />
                    <input type="text" name="name" required />
                </div>
                <div>
                    <label>Email:</label><br />
                    <input type="email" name="email" required />
                </div>
                <div>
                    <label>Message:</label><br />
                    <textarea name="message" rows="5" required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact;
