import React from "react";

const Plan = (props) => {
  const { name, description, price, details } = props;

  return (
    <div className="pricing-column">
      <h2>{name}</h2>
      <ul>{description}</ul>
      <h1 className="price">{price}</h1>
      <button>Learn More</button>
      <ul className="member-price-text">PER MEMBER PER MONTH</ul>
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