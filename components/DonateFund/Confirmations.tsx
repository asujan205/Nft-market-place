import React from "react";
type Data = {
  amount: number;
  payMethods: string;
};
const ConfirmModel = (props: Data) => {
  console.log(props.amount);
  console.log(props.payMethods);
  return <></>;
};
export default ConfirmModel;
