import React, { useState } from "react";

const PaymentMethodSelector = () => {
  const [selectedMethod, setSelectedMethod] = useState("credit");

  const handleOptionChange = (event: any) => {
    setSelectedMethod(event.target.value);
  };

  return (
    <div className="flex flex-col mt-4">
      <h3 className="text-lg font-medium">Select Payment Method:</h3>
      <div className="mt-2">
        <input
          type="radio"
          value="credit"
          checked={selectedMethod === "credit"}
          onChange={handleOptionChange}
          className="mr-2"
        />
        <label className="text-sm">Fonpay</label>
      </div>
      <div className="mt-2">
        <input
          type="radio"
          value="debit"
          checked={selectedMethod === "debit"}
          onChange={handleOptionChange}
          className="mr-2"
        />
        <label className="text-sm">Esewa</label>
      </div>
    </div>
  );
};

export default PaymentMethodSelector;
