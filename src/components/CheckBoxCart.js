import React from "react";
import './styling.css';

const CheckBoxCart = ({ item, handleChange }) => {

  return (
    <div className="checkbox-words">
      <input
        type="checkbox"
        onChange={event => handleChange(item, event)}
      />
      Add to Cart
      <div className="price">
        <p>${item.price}</p>
      </div>
    </div>
  );
};

export default CheckBoxCart;
