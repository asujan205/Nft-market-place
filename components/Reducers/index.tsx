import React from "react";
import getTheData from "./getAlldata";
import { combineReducers } from "redux";
const RootReducer = combineReducers({
  getTheData,
});

export default RootReducer;
