
import React from "react";
import Plan from "./Plan";
import '../../styles/PricingTable.css';

const PricingTable = () => {
  const starterPlanDetails = [
    "Team Sharing",
    "Custom Capacity and Workload",
    "White Labeling",
    "Live Onboarding Training",
    "Access to Manager Services",
    "Custom Permissions",
    "Default Personal Views",
    "Custom Capacity in Workload",
  ];

  const premiumPlanDetails = [
    "Team Sharing",
    "Custom Capacity and Workload",
    "White Labeling",
    "Live Onboarding Training",
    "Access to Manager Services",
    "Custom Permissions",
    "Default Personal Views",
    "Custom Capacity in Workload",
  ];

  const teamPlanDetails = [
    "Team Sharing",
    "Custom Capacity and Workload",
    "White Labeling",
    "Live Onboarding Training",
    "Access to Manager Services",
    "Custom Permissions",
    "Default Personal Views",
    "Custom Capacity in Workload",
  ];

  return (
    <div className="container">
      <header className="header">OUR PRICING</header>
      <h3 className="title">Choose The Plan That Suits You</h3>
      <div className="pricing-table">
        <Plan
          name="Starter Plan"
          description="Best for personal use"
          price="Free"
          details={starterPlanDetails}
        />
        <Plan
          name="Premium Plan"
          description="Best for mid-sized teams"
          price="$12"
          details={premiumPlanDetails}
        />
        <Plan
          name="Team Plan"
          description="Best for multiple teams"
          price="$19"
          details={teamPlanDetails}
        />
      </div>
    </div>
  );
};

export default PricingTable;