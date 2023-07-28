import React, { useEffect, useState } from "react";

// import NftCard from "../MiniComponents/NftCard";
import { FetchAllNfts, BuyNftss } from "../Reducers/getAlldata";
import NftCard from "./nftCardDummy";

import useConnected from "./useConnected";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
const images = [
  "/img1.png",
  "/img2.png",
  "/img3.png",
  "/img4.png",
  "/img5.png",
  "/img6.png",
  "/img7.png",
  // Add more image URLs as needed
];
// nftData.js

const nftData = [
  {
    id: 1,
    title: "BarBar",
    imageUrl: "/nft1.png",
    price: "10 Eth",
  },
  {
    id: 2,
    title: "NFT 2 Title",
    imageUrl: "/nft2.svg",
    price: "5 Eth",
  },
  {
    id: 3,
    title: "NFT 3 Title",
    imageUrl: "/nft3.png",
    price: "15 Eth",
  },
  // Add more NFT data as needed
];

type NFTMetadata = {
  name: string;
  description: string;
  imageURL: string;
  price: number;
};
const Homepage: any = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const checkArray = useConnected();
  const [metaData, setMetadata] = useState<any[]>([]);
  const [fetZero, setFetchZer] = useState(0);

  useEffect(() => {
    const fetchAllNfts = async () => {
      const newData = dispatch(FetchAllNfts());

      setMetadata((await newData).payload as any[]);
    };

    fetchAllNfts();
  }, [fetZero]);

  const BuyNfts = (key: any) => {
    console.log(key);
    dispatch(BuyNftss({ key }));
  };
  const gradientBackground = {
    background:
      "linear-gradient(180deg, rgba(255, 255, 255, 0.40) 0.55%, rgba(255, 255, 255, 0.04) 100%)",
  };
  const bg = {
    backgroundImage: `url('/SETiMG.svg')`,
  };

  return (
    <>
      <div
        className=" bg-gradient-to-r from-[#220970] to-[#FF00A8] "
        // style={bg}
      >
        <div className=" flex flex-col mx-auto  max-w-7xl py-[6rem] items-start">
          <div className="text-[#FFF] text-center font-Poppins text-[16px] normal font-[500] leading-normal ">
            New NFTs
          </div>
          <div className="text-[#FFF] text-center font-Poppins text-[36px] normal font-[500] leading-normal">
            Weekly Top Nfts
          </div>
          <div className="flex flex-row justify-between items-center gap-10    w-full ">
            <h1 className="text-[#FFF] text-center font-Poppins text-[16px] normal font-[500] leading-normal tracking-[0.3px]">
              <p>
                Outsource your nft collection project and get it quickly done
              </p>
              <p>and delivered remotely online.</p>
            </h1>

            <div className=" ">
              <img src="/arrows.svg" />
            </div>
          </div>

          <div className="flex flex-row gap-10  flex-wrap justify-between items-start ">
            {nftData.map((nft, key) => (
              <>
                <h1
                  key={key}
                  className="text-[#FFF] text-center font-Poppins text-[16px] normal font-[500] leading-normal tracking-[0.3px]"
                ></h1>
                <NftCard nft={nft} />
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full   bg-backk">
        <div className="flex flex-col mx-auto justify-between  max-w-7xl py-[6rem] items-start">
          <div className="text-[#FFF]  font-Poppins text-[36px] normal font-[700] leading-normal ">
            Our Top Creator’s Words
          </div>

          <div className="flex flex-row  flex-wrap justify-between items-start mt-10 py-5 gap-10 ">
            <div
              className="  h-[227px] rounded-[15px] flex flex-row backdrop-filter backdrop-blur-[25px] bg-opacity-10"
              style={gradientBackground}
            >
              <div className="flex flex-col px-5 ">
                <h1 className="text-[#FFF] text-justify font-Poppins text-[34px] normal font-[500] leading-normal tracking-[0.3px]">
                  Joson Roy
                </h1>
                <h1 className="text-[#FFF] text-justify font-Poppins text-[24px] normal font-[400] leading-normal tracking-[0.3px]">
                  Sr. Designer
                </h1>
              </div>
              <div className="flex flex-col items-center">
                <img src="/badge.svg" />
                <div className="text-[#FFF] text-center text-[32px] normal font-[400] font-poppins ">
                  EXPERT
                </div>
              </div>
            </div>
            <div className="flex flex-col ">
              <h1 className="text-[#FFF] text-justify font-Poppins text-[24px] max-w-2xl normal font-[400] leading-normal tracking-[0.3px]">
                NFT will open thousands of new opportunities for this new
                generation. I feel so proud and blessed that I have seen and
                taken advantage of many great opportunities in this world before
                millions of people have seen them.
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="110"
                height="22"
                viewBox="0 0 110 22"
                fill="none"
              >
                <path
                  d="M10.0489 2.92705C10.3483 2.00574 11.6517 2.00574 11.9511 2.92705L13.2451 6.90983C13.379 7.32185 13.763 7.60081 14.1962 7.60081H18.3839C19.3527 7.60081 19.7554 8.84043 18.9717 9.40983L15.5838 11.8713C15.2333 12.126 15.0866 12.5773 15.2205 12.9894L16.5146 16.9721C16.8139 17.8934 15.7595 18.6596 14.9757 18.0902L11.5878 15.6287C11.2373 15.374 10.7627 15.374 10.4122 15.6287L7.02426 18.0902C6.24054 18.6596 5.18607 17.8934 5.48542 16.9721L6.7795 12.9894C6.91338 12.5773 6.76672 12.126 6.41623 11.8713L3.02827 9.40983C2.24456 8.84043 2.64734 7.60081 3.61606 7.60081H7.8038C8.23703 7.60081 8.62099 7.32185 8.75486 6.90983L10.0489 2.92705Z"
                  fill="url(#paint0_linear_15_2099)"
                />
                <path
                  d="M32.0489 2.92705C32.3483 2.00574 33.6517 2.00574 33.9511 2.92705L35.2451 6.90983C35.379 7.32185 35.763 7.60081 36.1962 7.60081H40.3839C41.3527 7.60081 41.7554 8.84043 40.9717 9.40983L37.5838 11.8713C37.2333 12.126 37.0866 12.5773 37.2205 12.9894L38.5146 16.9721C38.8139 17.8934 37.7595 18.6596 36.9757 18.0902L33.5878 15.6287C33.2373 15.374 32.7627 15.374 32.4122 15.6287L29.0243 18.0902C28.2405 18.6596 27.1861 17.8934 27.4854 16.9721L28.7795 12.9894C28.9134 12.5773 28.7667 12.126 28.4162 11.8713L25.0283 9.40983C24.2446 8.84043 24.6473 7.60081 25.6161 7.60081H29.8038C30.237 7.60081 30.621 7.32185 30.7549 6.90983L32.0489 2.92705Z"
                  fill="url(#paint1_linear_15_2099)"
                />
                <path
                  d="M54.0489 2.92705C54.3483 2.00574 55.6517 2.00574 55.9511 2.92705L57.2451 6.90983C57.379 7.32185 57.763 7.60081 58.1962 7.60081H62.3839C63.3527 7.60081 63.7554 8.84043 62.9717 9.40983L59.5838 11.8713C59.2333 12.126 59.0866 12.5773 59.2205 12.9894L60.5146 16.9721C60.8139 17.8934 59.7595 18.6596 58.9757 18.0902L55.5878 15.6287C55.2373 15.374 54.7627 15.374 54.4122 15.6287L51.0243 18.0902C50.2405 18.6596 49.1861 17.8934 49.4854 16.9721L50.7795 12.9894C50.9134 12.5773 50.7667 12.126 50.4162 11.8713L47.0283 9.40983C46.2446 8.84043 46.6473 7.60081 47.6161 7.60081H51.8038C52.237 7.60081 52.621 7.32185 52.7549 6.90983L54.0489 2.92705Z"
                  fill="url(#paint2_linear_15_2099)"
                />
                <path
                  d="M76.0489 2.92705C76.3483 2.00574 77.6517 2.00574 77.9511 2.92705L79.2451 6.90983C79.379 7.32185 79.763 7.60081 80.1962 7.60081H84.3839C85.3527 7.60081 85.7554 8.84043 84.9717 9.40983L81.5838 11.8713C81.2333 12.126 81.0866 12.5773 81.2205 12.9894L82.5146 16.9721C82.8139 17.8934 81.7595 18.6596 80.9757 18.0902L77.5878 15.6287C77.2373 15.374 76.7627 15.374 76.4122 15.6287L73.0243 18.0902C72.2405 18.6596 71.1861 17.8934 71.4854 16.9721L72.7795 12.9894C72.9134 12.5773 72.7667 12.126 72.4162 11.8713L69.0283 9.40983C68.2446 8.84043 68.6473 7.60081 69.6161 7.60081H73.8038C74.237 7.60081 74.621 7.32185 74.7549 6.90983L76.0489 2.92705Z"
                  fill="url(#paint3_linear_15_2099)"
                />
                <path
                  d="M98.0489 2.92705C98.3483 2.00574 99.6517 2.00574 99.9511 2.92705L101.245 6.90983C101.379 7.32185 101.763 7.60081 102.196 7.60081H106.384C107.353 7.60081 107.755 8.84043 106.972 9.40983L103.584 11.8713C103.233 12.126 103.087 12.5773 103.22 12.9894L104.515 16.9721C104.814 17.8934 103.759 18.6596 102.976 18.0902L99.5878 15.6287C99.2373 15.374 98.7627 15.374 98.4122 15.6287L95.0243 18.0902C94.2405 18.6596 93.1861 17.8934 93.4854 16.9721L94.7795 12.9894C94.9134 12.5773 94.7667 12.126 94.4162 11.8713L91.0283 9.40983C90.2446 8.84043 90.6473 7.60081 91.6161 7.60081H95.8038C96.237 7.60081 96.621 7.32185 96.7549 6.90983L98.0489 2.92705Z"
                  fill="url(#paint4_linear_15_2099)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_15_2099"
                    x1="0"
                    y1="0"
                    x2="26.7105"
                    y2="1.03932"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.183111" stop-color="#FF56F6" />
                    <stop offset="0.432593" stop-color="#B936EE" />
                    <stop offset="0.854443" stop-color="#3BACE2" />
                    <stop offset="1" stop-color="#406AFF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_15_2099"
                    x1="22"
                    y1="0"
                    x2="48.7105"
                    y2="1.03932"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.183111" stop-color="#FF56F6" />
                    <stop offset="0.432593" stop-color="#B936EE" />
                    <stop offset="0.854443" stop-color="#3BACE2" />
                    <stop offset="1" stop-color="#406AFF" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_15_2099"
                    x1="44"
                    y1="0"
                    x2="70.7105"
                    y2="1.03932"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.183111" stop-color="#FF56F6" />
                    <stop offset="0.432593" stop-color="#B936EE" />
                    <stop offset="0.854443" stop-color="#3BACE2" />
                    <stop offset="1" stop-color="#406AFF" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_15_2099"
                    x1="66"
                    y1="0"
                    x2="92.7105"
                    y2="1.03932"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.183111" stop-color="#FF56F6" />
                    <stop offset="0.432593" stop-color="#B936EE" />
                    <stop offset="0.854443" stop-color="#3BACE2" />
                    <stop offset="1" stop-color="#406AFF" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_15_2099"
                    x1="88"
                    y1="0"
                    x2="114.711"
                    y2="1.03932"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.183111" stop-color="#FF56F6" />
                    <stop offset="0.432593" stop-color="#B936EE" />
                    <stop offset="0.854443" stop-color="#3BACE2" />
                    <stop offset="1" stop-color="#406AFF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-5  mt-[8rem] lg:pl-[15rem]">
            {images.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Image ${index + 1}`}
                className={`w-[120px]  object-cover rounded shadow-md transition-transform ${
                  index === 3 ? "transform scale-125" : "transform scale-100"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#220970] to-[#FF00A8]">
        <div className="flex flex-col mx-auto justify-between  max-w-7xl py-[6rem] items-start">
          <div className="text-[#FFF]  font-Poppins text-[36px] normal font-[700] leading-normal ">
            View Creator’s Collections
          </div>
          <div className="relative">
            <div className="mb-0">
              <img src="/img12.png" alt="Image" />
            </div>
            <div
              className="absolute top-[19rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[279.556px] h-[175px] rounded-[15px] backdrop-blur-[21px]"
              style={gradientBackground}
            ></div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-wrap space-x-10 mx-auto justify-center	bg-[url('/bg.svg')]mt-10">
        {metaData &&
          metaData.map((item, key) => {
            return (
              <>
                <div className="flex-column flex-wrap space-y-2">
                  <NftCard
                    Name={item.name}
                    Price={item.money}
                    description={item.description}
                    imageUrl={item.image}
                  />
                  <div className="flex gap-12">
                    <button
                      onClick={() => BuyNfts(item.tokenId)}
                      className="h-15 rounded-lg bg-sujan-100 px-10 py-2 pl-3 text-xl font-semibold text-white"
                    >
                      Buy
                    </button>
                    <button className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
                      AddToCart
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        :{" "}
      </div> */}
    </>
  );
};

export default Homepage;
