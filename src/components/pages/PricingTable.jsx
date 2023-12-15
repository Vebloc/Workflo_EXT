
import React,  {useState} from "react";
import Plan from "./Plan";
import '../../styles/PricingTable.css';
import {
  monthlyStarterPlanDetails,
  monthlyPremiumPlanDetails,
  monthlyTeamPlanDetails,
  yearlyStarterPlanDetails,
  yearlyPremiumPlanDetails,
  yearlyTeamPlanDetails,
} from '../../data/PlanDetails';

const PricingTable = () => {
  const [isYearly, setIsYearly] = useState(false);

  const toggleView = () => {
    setIsYearly((prevIsYearly) => !prevIsYearly);
  };

  return (
    <div className="container">
      <header className="header">OUR PRICING</header>
      <h3 className="title">Choose The Plan That Suits You</h3>
      <div className="toggle-container">
        <button className={`monthly ${!isYearly ? "active" : "inactive"}`} onClick={toggleView} disabled={!isYearly}>
          Monthly
        </button>
        <button className={`yearly ${isYearly ? "active" : "inactive"}`} onClick={toggleView} disabled={isYearly}>
          Yearly
        </button>
      </div>
      <div className="pricing-table">
        <Plan
          name="Starter Plan"
          description="Best for personal use"
          price={isYearly ? "Yearly Price" : "Free"}
          details={isYearly ? yearlyStarterPlanDetails : monthlyStarterPlanDetails}
          isYearly={isYearly}
        />
        <Plan
          name="Premium Plan"
          description="Best for mid-sized teams"
          price={isYearly ? "Yearly Price" : "$12"}
          details={isYearly ? yearlyPremiumPlanDetails : monthlyPremiumPlanDetails}
          isYearly={isYearly}
        />
        <Plan
          name="Team Plan"
          description="Best for multiple teams"
          price={isYearly ? "Yearly Price" : "$19"}
          details={isYearly ? yearlyTeamPlanDetails : monthlyTeamPlanDetails}
          isYearly={isYearly}
        />
      </div>
    </div>
  );
};

export default PricingTable;