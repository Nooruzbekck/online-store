import React, { useContext } from "react";
import { ProdustsItem } from "./ProdustsItem";
import styled from "styled-components";
import { CartContext } from "../../context/CartContext";
import { ProductContext } from "../../context/ProductContext";

export const ProdustsList = ({ produstsCard }) => {
  const { addToCart } = useContext(CartContext);
  const {onAddToFavorite} = useContext(ProductContext)


  const totalAmount = produstsCard.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <>
      <StyledUl>
        {produstsCard.map((item) => (
          <ProdustsItem
            key={item.id}
            image={item.image}
            name={item.name}
            onAddToCart={() => addToCart(item)}
            rating={item.rating}
            price={item.price}
            count={item.count}
            {...item}
            handleFavourite={onAddToFavorite}
          />
        ))}
      </StyledUl>

      <TotalAmount>Total amount: {totalAmount} $ </TotalAmount>
    </>
  );
};

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 60px;
  margin-left: 79px;
`;

const TotalAmount = styled.h1`
  display: flex;
  justify-content: end;
`;
