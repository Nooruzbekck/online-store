import { createContext, useState } from "react";
import { PRODUCTS } from "../components/Cards/products";

export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);

  const handleShowFavorite = (id) => {
    const currentMap = products.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isFavourite: !item.isFavourite,
        };
      }
      return item;
    });
    setProducts(currentMap);
  };

  return (
    <ProductContext.Provider
      value={{ products, onAddToFavorite: handleShowFavorite }}
    >
      {children}
    </ProductContext.Provider>
  );
};
