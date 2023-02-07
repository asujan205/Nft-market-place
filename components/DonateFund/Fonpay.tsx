import * as React from "react";

const autoSubmission = true;
const MD = "P";
const AMT = "10";
const CRN = "NPR";
const DT = new Date().toLocaleDateString();
const R1 = "test";
const R2 = "test";
const RU = "http://localhost/verify.php";
const PRN = Math.random().toString(36).substr(2, 9);
const PID = "NBQM";
const sharedSecretKey = "a7e3512f5032480a83137793cb2021dc";
const DV = btoa(
  PID +
    "," +
    MD +
    "," +
    PRN +
    "," +
    AMT +
    "," +
    CRN +
    "," +
    DT +
    "," +
    R1 +
    "," +
    R2 +
    "," +
    RU
);
const paymentLiveUrl = "https://clientapi.fonepay.com/api/merchantRequest";
const paymentDevUrl = "https://dev-clientapi.fonepay.com/api/merchantRequest";

class PaymentForm extends React.Component {
  render() {
    return (
      <form method="GET" id="payment-form" action={paymentDevUrl}>
        <input type="hidden" name="PID" value={PID} />
        <input type="hidden" name="MD" value={MD} />
        <input type="hidden" name="AMT" value={AMT} />
        <input type="hidden" name="CRN" value={CRN} />
        <input type="hidden" name="DT" value={DT} />
        <input type="hidden" name="R1" value={R1} />
        <input type="hidden" name="R2" value={R2} />
        <input type="hidden" name="DV" value={DV} />
        <input type="hidden" name="RU" value={RU} />
        <input type="hidden" name="PRN" value={PRN} />
        <input type="submit" value="Click to Pay" />
      </form>
    );
  }
}

export default PaymentForm;
