import React from "react";
import '../../styles/PricingTable.css';

const PricingTable = () => {
    return (
      <div className="container">
        <h3 className="header">Choose The Plan That Suits You</h3>
        <div className="pricing-table">
          <div className="pricing-column">
            <h2>Starter Plan</h2>
            <ul>Best for personal use</ul>
            <h1 className="price">Free</h1>
            <button>Learn More</button>
            <ul className="member-price-text">PER MEMBER PER MONTH</ul>
            <br></br>
            <ul>
            <li>Team Sharing</li>
            <li>Custom Capacity and Workload</li>
            <li>White Labeling</li>
            <li>Live Onboarding Training</li>
            <li>Access to Manager Services</li>
            <li>Custom Permissions</li>
            <li>Default Personal Views</li>
            <li>Custom Capacity in Workload</li>
          </ul>
        </div>
  
        <div className="pricing-column">
          <h2>Premium Plan</h2>
          <ul>Best for mid-sized teams</ul>
          <h1 className="price">$12</h1>
          <button>Learn More</button>
          <ul className="member-price-text">PER MEMBER PER MONTH</ul>
          <br></br>
          <ul>
            <li>Team Sharing</li>
            <li>Custom Capacity and Workload</li>
            <li>White Labeling</li>
            <li>Live Onboarding Training</li>
            <li>Access to Manager Services</li>
            <li>Custom Permissions</li>
            <li>Default Personal Views</li>
            <li>Custom Capacity in Workload</li>
          </ul>
        </div>
  
        <div className="pricing-column">
          <h2>Team Plan</h2>
          <ul>Best for multiple teams</ul>
          <h1 className="price">$19</h1>
          <button>Learn More</button>
          <ul className="member-price-text">PER MEMBER PER MONTH</ul>
          <br></br>
          <ul>
            <li>Team Sharing</li>
            <li>Custom Capacity and Workload</li>
            <li>White Labeling</li>
            <li>Live Onboarding Training</li>
            <li>Access to Manager Services</li>
            <li>Custom Permissions</li>
            <li>Default Personal Views</li>
            <li>Custom Capacity in Workload</li>
          </ul>
        </div>
      </div>
    </div>
    );
  };
  
  export default PricingTable;