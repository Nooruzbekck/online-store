import React, { createContext, useState } from "react";
import { PRODUCTS } from "../components/Cards/products";

export const FavouriteContext = createContext();

export const FavouriteProvider = ({ children }) => {
  // Initialize the state with PRODUCTS, setting isFavourite to true for each product
  const [state, setState] = useState(
    PRODUCTS.map((product) => ({ ...product, isFavourite: true }))
  );

  console.log("state:", state);

  const handleFavourite = (newProduct) => {
    console.log("Handling favourite:", newProduct);

    if (newProduct) {
      const existingProduct = state.find(
        (product) => product.id === newProduct.id
      );

      if (!existingProduct) {
        // Add new product to state with isFavourite set to true
        setState((prevState) => [
          ...prevState,
          { ...newProduct, isFavourite: true }, // Add isFavourite property
        ]);
      }
    }
  };

  return (
    <FavouriteContext.Provider value={{ state, handleFavourite }}>
      {children}
    </FavouriteContext.Provider>
  );
};
