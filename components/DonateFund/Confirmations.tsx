import React from "react";
import EsewaForm from "./Esewa";
import PaymentForm from "./Fonpay";
type Data = {
  amount: number;
  payMethods: string;
};
const ConfirmModel = (props: Data) => {
  console.log(props.amount);
  console.log(props.payMethods);
  return (
    <>
      {props.payMethods == "esewa" ? (
        <EsewaForm amt={props.amount} />
      ) : (
        <PaymentForm />
      )}
    </>
  );
};
export default ConfirmModel;
