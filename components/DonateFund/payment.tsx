import React, { useState } from "react";

const PaymentMethodSelector = ({ setSelectedMethod }: any) => {
  return (
    <div className="flex flex-col mt-4">
      <h3 className="text-lg font-medium">Select Payment Method:</h3>
      <div className="mt-2">
        <input
          type="radio"
          value="fonpay"
          onChange={(event) => setSelectedMethod(event.target.value)}
          className="mr-2"
        />
        <label className="text-sm">Fonpay</label>
      </div>
      <div className="mt-2">
        <input
          type="radio"
          value="esewa"
          onChange={(event) => setSelectedMethod(event.target.value)}
          className="mr-2"
        />
        <label className="text-sm">Esewa</label>
      </div>
    </div>
  );
};

export default PaymentMethodSelector;
