import React from "react";
import CartItem2 from "./CartItem2";
import "./cartitem2.css";

const Cart1 = (props) => {
  const { product, onincrease, ondecrease, ondelete } = props;
  return (
    <div class="list-card">
      {product.map((element) => {
        return (
          <CartItem2
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

export default Cart1;
