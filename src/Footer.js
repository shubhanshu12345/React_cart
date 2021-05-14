import React from "react";
import "./index.css";

const Footer = (props) => {
  return (
    <div className="foot">
      <table>
        <h2>PRICE DETAILS</h2>
        <div className="line"></div>
        <tr>
          <th>Price ({props.count} items)</th>
          <th>{props.total}</th>
        </tr>
        <tr>
          <th>Delivery Charges</th>
          <th>{props.count * 40}</th>
        </tr>
        <tr>
          <th>Total Amount</th>
          <th>{props.count * 40 + props.total}</th>
        </tr>
        <button className="btn">PLACE ORDER</button>
      </table>
    </div>
  );
};
export default Footer;
