import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, setState] = useState([]);
  console.log("state:", state);

  const addToCart = (newProduct) => {
    console.log("Adding to cart:", newProduct);

    if (newProduct) {
      const existingProduct = state.find(
        (product) => product.id === newProduct.id
      );

      if (existingProduct) {
        setState((prevState) =>
          prevState.map((product) =>
            product.id === newProduct.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          )
        );
      } else {
        setState((prevState) => [...prevState, { ...newProduct, quantity: 1 }]);
      }
    }
  };

  const handleFavourite = (newProduct) => {
    if (newProduct) {
      const existingProduct = state.find(
        (product) => product.id === newProduct.id
      );
      console.log(existingProduct);

      // if (existingProduct) {
      //   existingProduct.isFavourite: true;
      // }
    }
  };

  return (
    <CartContext.Provider value={{ state, addToCart, handleFavourite }}>
      {children}
    </CartContext.Provider>
  );
};
