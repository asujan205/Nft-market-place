import { configureStore } from "@reduxjs/toolkit";
import nftReducer from "./getAlldata";
const Nfts = {
  nfts: nftReducer,
};

export default configureStore({
  reducer: Nfts,
  devTools: true,
});
