import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import "../../Signup.css"

const Signup = () => {
  const decorationImage = "https://my.workflo.app/images/icons/loginIcon.png";
  const logo = "https://my.workflo.app/images/icons/logo.svg";
  const [completed, setCompleted] = useState(false);

  const handleCheckboxChange = () => {
    setCompleted(prevCompleted => !prevCompleted);
  };

  return (
  <div className="signup-page">
    <div className="signup-logo">
      <a href="https://workflo.com/">
        <img className="signup-logo-image" src={logo} alt="Workflo-logo"/>
      </a>
    </div>
    <img className= "signup-decoration-image" src={decorationImage} alt="null"/>
    <div className="signup-form">
      <p className="signup-form-first-p">Let's go!</p>
      <div className="signup-form-questions">
        <p className="signup-form-label">Full Name</p>
        <input placeholder="John Doe"/>
        <br/>
        <p className="signup-form-label">Email Address</p>
        <input placeholder="name@company.com"/>
        <br/>
        <p className="signup-form-label">Password</p>
        <input placeholder="minimum 8 characters"/>
      </div>
      <br/>
      <div className="signup-checkbox">
        <input className="signup-checkbox-symbol" type="checkbox" checked={completed} onChange={handleCheckboxChange}placeholder="Remember Password"/>
        <label>Remember Password</label>
      </div>
      <br/>
      <button type="submit">Sign Up!</button>
      <div className="signup-account">
        <p>Have an account?</p>
        <Link to="https://my.workflo.app/signin" className="signup-log-link">Log In</Link>
      </div>
    </div>
  </div>
  );
};

export default Signup;

