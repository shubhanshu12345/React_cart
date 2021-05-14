import React from "react";
import CartItem from "./CartItem";
import "./index.css";

const Cart = (props) => {
  const { product, onincrease, ondecrease, ondelete } = props;
  return (
    <div class="cart">
      {product.map((element) => {
        return (
          <CartItem
            product={element}
            key={element.id}
            onincrease={onincrease}
            ondecrease={ondecrease}
            ondelete={ondelete}
          />
        );
      })}
    </div>
  );
};

export default Cart;
