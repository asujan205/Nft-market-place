import React from "react";

const NftCard = ({ nft }: any) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-row p-[0.2rem] backdrop-blur-[25px] relative bg-gradient-to-r from-red to-purple-50 mt-3 ">
        <div className="bg-[#222] ">
          <img
            src={nft.imageUrl}
            alt={nft.title}
            className=" object-cover p-6 items-center w-[300px] h-[300px]"
          />
        </div>
      </div>
      <div className="bg-[#02021B] flex flex-col pl-4 flex-1 p-3">
        <div className="flex flex-row justify-between items-center h-[50px] gap-11">
          <div className="text-[#FFF] font-Poppins text-[14px] normal font-[400] leading-normal">
            {nft.title}
          </div>
        </div>

        <div className="flex flex-row gap-2 items-center mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="32"
            viewBox="0 0 20 32"
            fill="none"
          >
            <path d="M9.99657 0L0 16.2966L9.99657 11.833V0Z" fill="white" />
            <path
              d="M9.99657 11.8328L0 16.2963L9.99657 22.1027V11.8328Z"
              fill="white"
            />
            <path
              d="M19.9944 16.2966L9.99597 0V11.833L19.9944 16.2966Z"
              fill="white"
            />
            <path
              d="M9.99597 22.1027L19.9944 16.2963L9.99597 11.8328V22.1027Z"
              fill="white"
            />
            <path d="M0 18.16L9.99657 32.0001V23.9628L0 18.16Z" fill="white" />
            <path
              d="M9.99597 23.9628V32.0001L20 18.16L9.99597 23.9628Z"
              fill="white"
            />
          </svg>
          <h1 className="text-[#FFF] text-center font-Poppins text-[14px] normal font-[400] leading-normal">
            {nft.price}
          </h1>
        </div>

        <div className="flex justify-center mt-5 px-8">
          <button className="rounded-[5px] p-5 items-center px-8 backdrop-blur-[96px] shadow-custom bg-gradient-to-r from-[#FF56F6] from-18.8% to-[#3BACE2] to-85.44% via-[#B936EE] via-40% group-hover:bg-gradient-to-l hover:from-[#3BACE2] hover:to-[#FF56F6] hover:via-[#406AFF]">
            Bid Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
