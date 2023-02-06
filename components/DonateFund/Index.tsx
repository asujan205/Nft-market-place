import React, { useState } from "react";

const Donate = () => {
  const [Amount, setAmount] = useState<number>();
  const [slider, setSlider] = useState<number>();

  return (
    <>
      <div className="flex flex-col align-center bg-black w-40 m-20">
        <div className="GroupInfo">
          <p>hello</p>
          <p>world</p>
        </div>
        <div className="flex flex-col">
          <input type={"text"} className="  " />
        </div>
      </div>
    </>
  );
};
export default Donate;
