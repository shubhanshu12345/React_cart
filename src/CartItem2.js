import React from "react";
import "./cartitem2.css";

const CartItem2 = (props) => {
  const { product, onincrease } = props;
  const { title, img1 } = props.product;
  return (
    <div>
      <div className="card-head">
        <img src={img1} alt="" className="card-image" />
        <div className="card-detail">{title}</div>
        <button
          alt="increase"
          className="actions-iconss"
          onClick={() => onincrease(product)}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};
export default CartItem2;
