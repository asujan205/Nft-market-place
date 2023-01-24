import React from "react";

export const getAllNfts = () => {
  return {
    type: "GetAllNfts",
  };
};
export const getMyListedNfts = () => {
  return {
    type: "mynfts",
  };
};

export const getMyBuyedNfts = () => {
  return {
    type: "buyNfts",
  };
};
