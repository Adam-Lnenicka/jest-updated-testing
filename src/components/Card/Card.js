import React from "react";
import Upvotest from "../Upvotes/Upvotes";

const Card = ({ name, image, desc, price }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{desc}</p>
      <h4>Price: £{price}</h4>
      <Upvotest />
    </div>
  );
};

export default Card;
