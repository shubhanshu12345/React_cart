import React from "react";
import "./index.css";

const CartItem = (props) => {
  const { product, onincrease, ondecrease, ondelete } = props;
  const { title, qty, price, img1 } = props.product;
  return (
    <div className="cart-item">
      <div className="left-block">
        <div className="image">
          <img src={img1} alt="" className="imagee"></img>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <div className="right-block">
        <div style={{ fontSize: 20 }}>{title}</div>
        <div style={{ fontSize: 15 }}>RS. {price}</div>
        <div style={{ fontSize: 15 }}>QTY: {qty}</div>
        <div className="cart-item-actions">
          <img
            alt="increase"
            className="actions-icons"
            src="https://www.flaticon.com/svg/static/icons/svg/992/992651.svg"
            onClick={() => onincrease(product)}
          ></img>
          <img
            alt="decrease"
            className="actions-icons"
            src="https://www.flaticon.com/svg/static/icons/svg/992/992683.svg"
            onClick={() => ondecrease(product)}
          ></img>
          <img
            alt="delete"
            className="actions-icons"
            src="https://www.flaticon.com/svg/static/icons/svg/3096/3096687.svg"
            onClick={() => ondelete(product.id)}
          ></img>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
