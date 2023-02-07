import React, { useEffect } from "react";

const path = "https://uat.esewa.com.np/epay/main";

type amount = {
  amt: number;
};
const EsewaForm = (props: amount) => {
  const params = {
    amt: props.amt,
    psc: 0,
    pdc: 0,
    txAmt: 0,
    tAmt: props.amt,
    pid: "ee2c3ca1-696b-4cc5-a6be-2c40d929d453",
    scd: "EPAYTEST",
    su: "http://merchant.com.np/page/esewa_payment_success",
    fu: "http://merchant.com.np/page/esewa_payment_failed",
  };

  useEffect(() => {
    const form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", path);

    for (const key in params) {
      const hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", params[key] as string);
      form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
  }, []);

  return <div />;
};

export default EsewaForm;
