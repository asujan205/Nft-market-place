import React, { useState } from "react";

const Donate = () => {
  const [Amount, setAmount] = useState<string>();
  const [slider, setSlider] = useState<number>();

  return (
    <>
      <div className="flex flex-col align-center bg-white w-60 m-20">
        <div className="GroupInfo">
          <p>hello</p>
          <p>world</p>
        </div>
        <div className="flex flex-col justify-between items-center mb-6">
          <label
            htmlFor="money"
            className="block text-gray-700 font-medium mb-2"
          >
            Enter Yours Donation:
          </label>
          <div className="relative w-64">
            <span className="absolute inset-y-0  px-3 py-2 text-gray-600">
              $
            </span>

            <input
              id="money"
              type="text"
              className="w-70 pl-10 h-15 p-2 border border-gray-400 rounded-lg text-right"
              placeholder="0.00"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Donate;
