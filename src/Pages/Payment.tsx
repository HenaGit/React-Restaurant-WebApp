import React from "react";
import { useLocation } from "react-router-dom";

function Payment() {
  const {
    state: { apiResult, userInput },
  } = useLocation();

  console.log(apiResult);
  console.log(userInput);
  return <div>Payment</div>;
}

export default Payment;