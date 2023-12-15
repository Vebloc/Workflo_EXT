import React from "react";

const Plan = (props) => {
  const { name, description, price, details, isYearly } = props;

  const memberPriceText = isYearly ? "PER MEMBER PER YEAR": "PER MEMBER PER MONTH";

  return (
    <div className="pricing-column">
      <h2>{name}</h2>
      <ul>{description}</ul>
      <h1 className="price">{price}</h1>
      <button className="learn-more">Learn More</button>
      <ul className="member-price-text">{memberPriceText}</ul>
      <br></br>
      <hr></hr>
      <br></br>
      <ul>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default Plan;