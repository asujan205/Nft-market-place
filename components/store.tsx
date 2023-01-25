import RootReducer from "./Reducers";
import { configureStore } from "@reduxjs/toolkit";
const Store = configureStore({
  reducer: { RootReducer },
});
export default Store;
