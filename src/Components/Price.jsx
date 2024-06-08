import React from "react";

const Price = (props) => {
  return (
    <div>
      <img src={props.img} alt="" />
      <p className="lii"></p>
      <h2>
        {props.t1}
        <sup>{props.t2}</sup> Price
      </h2>

      <h3>
        <span className="text-danger">Amount:</span> <span>&#8377;</span>{" "}
        {props.amount}
      </h3>
    </div>
  );
};

export default Price;
