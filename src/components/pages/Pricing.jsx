import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import "../../Pricing.css"

const Pricing = () => {
  const [perDetails, setPerDetails] = useState("Per user, per month");
  const [priceLine, setPriceLine] = useState("$8.99");
  const [price, setPrice] = useState("$6.99");


  const handleClick = () => {
    setPerDetails("Per user, per month, annually");
    setPriceLine("$6.99");
    setPrice("$4.99");
  };

  const handleReset = () => {
    setPerDetails("Per user, per month");
    setPriceLine("$8.99");
    setPrice("$6.99");
  };

  return (
  <div className="pricing-page">
    <div className="pricing-page-title-section">
      <h1 className="pricing-title">PRICING</h1>
    </div>
    <div className="pricing-message">
      <p className="pricing-message-details">View our simple and straight-forward pricing and determine the best option for your organization's needs.</p>
    </div>
    <div className="pricing-section">
      <div className="pricing-time">
        <button onClick={handleReset} className="pricing-monthly-button">MONTHLY</button>
        <button onClick={handleClick} className="pricing-yearly-button">YEARLY</button>
      </div>
      <div className="pricing-table">
        <div className="pricing-table-free">
          <h2 className="pricing-heading">FREE</h2>
          <p className="pricing-price">$0</p>
          <p className="pricing-free-description">Tailored for small teams with big needs</p>
          <ul className="pricing-free-list">
            <li>10MB/file upload limit</li>
            <li>250MB total storage limit per workspace</li>
            <li>Unlimited workspaces</li>
            <li>2 teams</li>
            <li>5 projects per team</li>
            <li>Chat history for 90 days</li>
            <li>3 custom fields</li>
          </ul>
          <a href="https://my.workflo.com/signup">
            <button className="pricing-get-started-btn-1">GET STARTED</button>
          </a>
        </div>
        <div className="pricing-table-team">
          <h2 className="pricing-heading">TEAM</h2>
          <div className="pricing-price-section">
            <p className="pricing-price-line">{priceLine}</p>
            <p className="pricing-price">{price}</p>
          </div>
          <p className="pricing-monthly-per">{perDetails}</p>
          <p className="pricing-team-description">For mid-sized teams managing diverse projects effeciently</p>
          <ul className="pricing-team-list">
            <li>1GB/file upload limit</li>
            <li>25GB total storage limit</li>
            <li>Unlimited workspaces</li>
            <li>Unlimited teams</li>
            <li>Unlimited projects per team</li>
            <li>Chat history forever</li>
            <li>Up to 10 custom fields</li>
          </ul>
          <a href="https://my.workflo.com/signup">
            <button className="pricing-get-started-btn-2">GET STARTED</button>
          </a>
        </div>
        <div className="pricing-table-business">
          <h2 className="pricing-heading">BUSINESS</h2>
          <p className="pricing-business-description">Best for large scale needs</p>
          <ul className="pricing-business-list">
            <li>All of Team Plan plus:</li>
            <li>Unlimited storage per workspace</li>
            <li>Unlimited custom fields</li>
            <li>Video calling</li>
            <li>Automations</li>
            <li>AI assistance</li>
            <li>Custom dashboards</li>
            <li>Single Sign-on (SSO)</li>
          </ul>
          <input placeholder="Email" className="pricing-email"/>
          <button type="submit" className="pricing-waitlist-btn">JOIN THE WAITLIST</button>
        </div>
        <div className="pricing-table-enterprise">
          <h2 className="pricing-heading">ENTERPRISE</h2>
          <p className="pricing-enterprise-description">Best for enterprise needs</p>
          <a href="https://workflo.com/enterprise/">
            <button className="pricing-contact-sales-btn">CONTACT SALES</button>
          </a>
        </div>
      </div>
    </div>
    <div className="pricing-blue-bar">
      <div className="pricing-blue-bar-info">
        <h1 className="pricing-blue-bar-title">GET STARTED WITH WORKFLO NOW!</h1>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <button className="pricing-get-started-btn">GET STARTED FOR FREE</button>
        </Link>
      </div>
    </div>
  </div>
  );
};

export default Pricing;
