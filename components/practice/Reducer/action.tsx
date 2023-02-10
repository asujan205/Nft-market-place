import React from "react";

const appReducer = (state: any, action: any) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "delete":
      return {
        ...state,
        products: state.products.filter(
          (item: any) => item.id !== action.payload
        ),
      };
    case "update":
      return {
        ...state,
        products: state.products.map((item: any) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              name: action.payload.name,
              description: action.payload.description,
              price: action.payload.price,
            };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

export default appReducer;
