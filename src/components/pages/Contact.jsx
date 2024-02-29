import React from 'react';
import "../../Contact.css"

const Contact = () => {

  return (
  <div className="contact-page">
    <div className="contact-page-title">
      <h1 className="contact-page-title-details">CONTACT US</h1>
    </div>
    <div className="contact-form">
      <div className="contact-info">
        <div className="contact-message">
          <h2 className="contact-message-title">Any Questions?</h2>
          <p className="contact-message-details">We'd love to hear from you. Please fill in the form and one of our team members will be in touch!</p>
        </div>
        <div className="contact-fields">
          <div className="contact-fields-required">
            <p className="contact-fields-label">Name</p>
            <span className="contact-fields-sign">*</span>
          </div>
          <input className="contact-fields-input"/>
          <br/>
          <div className="contact-fields-required">
            <p className="contact-fields-label">Email</p>
            <span className="contact-fields-sign">*</span>
          </div>
          <input className="contact-fields-input"/>
          <br/>
          <p className="contact-fields-label">Comment or Message</p>
          <textarea className="contact-fields-input-message"/>
          <br/>
          <button className="contact-submit" type="submit">Submit</button>
        </div>
      </div>
      <div className="contact-bug">
        <h3 className="contact-bug-title">BUGS</h3>
        <h2 className="contact-bug-heading">Noticed any bugs you'd like to report?</h2>
        <p className="contact-bug-details">Click below for our Canny link where you can report bugs and be kept up to date on our progress.</p>
        <a href="https://workflo.canny.io/">
        <button className="contact-bug-button" type="button">REPORT BUGS</button>
        </a>
      </div>
    </div>
  </div>
  );
};

export default Contact;
