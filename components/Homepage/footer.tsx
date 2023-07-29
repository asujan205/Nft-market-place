import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-backk">
      <div className="flex flex-col  py-4 mx-auto max-w-7xl gap-1">
        <div className="h-full  flex flex-row   gap-1 items-start">
          <Link href="/" className=" ">
            <img src="/logo.png" alt="logo" className=" h-[50px]" />
          </Link>
          <Link href="/">
            <h1 className="text-[#FFF] text-center font-Poppins text-[16px] normal font-[500] leading-normal py-3">
              SwapyMart
            </h1>
          </Link>
        </div>
        <h1 className="text-[#FFF]  font-Poppins text-[16px] normal font-[500] leading-normal  ">
          Start Working With Us
        </h1>
        <div className="flex flex-row  flex-wrap">
          <input
            type="text"
            placeholder="Enter your email Address"
            className="bg-[#0C0263]	 rounded-l-[5px] backdrop-blur-[5px] px-5 py-3 items-center w-[400px] placeholder:text-[#FFF]  placeholder:font-Poppins placeholder:text-[16px] normal font-[500] leading-normal"
          />
          <button className="rounded-r-[5px] p-5 items-center px-8 backdrop-blur-[96px] shadow-custom bg-gradient-to-r from-[#FF56F6] from-18.8% to-[#3BACE2] to-85.44% via-[#B936EE] via-40% group-hover:bg-gradient-to-l hover:from-[#3BACE2] hover:to-[#FF56F6] hover:via-[#406AFF]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
