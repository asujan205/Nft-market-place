import React from "react";
import EsewaForm from "./Esewa";
type Data = {
  amount: number;
  payMethods: string;
};
const ConfirmModel = (props: Data) => {
  console.log(props.amount);
  console.log(props.payMethods);
  return (
    <>
      <EsewaForm />
    </>
  );
};
export default ConfirmModel;
