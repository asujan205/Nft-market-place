import React, { useState } from "react";
import { Value } from "sass";
import PaymentMethodSelector from "./payment";

const Donate = () => {
  const [Amount, setAmount] = useState<any>();
  const [value, setValue] = useState<any>();
  const [selectedMethod, setSelectedMethod] = useState("");

  const Cal = Amount * (value / 500);

  const [coustomeTip, setCustomeTips] = useState<boolean>(true);
  const [custome, setCustome] = useState<any>();
  const tip = coustomeTip ? Cal : custome;
  const totalAmnt = coustomeTip
    ? Number(Amount) + Number(Cal)
    : Number(Amount) + Number(custome);

  return (
    <>
      <div className="flex flex-col align-center bg-white w-60 m-20">
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
        {coustomeTip ? (
          <>
            <div className="w-50 mb-6">
              <label
                htmlFor="percentage"
                className="block text-gray-700 font-medium mb-2"
              >
                Percentage
              </label>
              <input
                type="range"
                className="w-full appearance-none bg-gray-200 rounded-lg py-2 px-3 border border-gray-400"
                id="percentage"
                min="0"
                max="100"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />

              <output
                id="value"
                className="block text-center mt-2 text-gray-600"
              >
                {Cal}
              </output>

              <button onClick={() => setCustomeTips(false)}>
                set and custome tips
              </button>
            </div>
          </>
        ) : (
          <>
            <input
              type="text"
              className="w-full appearance-none bg-gray-200 rounded-lg py-2 px-3 border border-gray-400"
              id="percentage"
              min="0"
              max="100"
              value={value}
              onChange={(e) => setCustome(e.target.value)}
            />
          </>
        )}
        <div>
          <PaymentMethodSelector setSelectedMethod={setSelectedMethod} />
        </div>
        <div className="flex flex-col">
          <p>Yours Donation</p>
          <p>Amount:{Amount}</p>
          <p>tips:{tip}</p>
          <p>Total:{totalAmnt}</p>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 ">
          Proceed Payment
        </button>

        {/* <script>

</script> */}
      </div>
    </>
  );
};
export default Donate;
