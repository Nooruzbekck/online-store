import React from "react";
import { ProdustsItem } from "./ProdustsItem";
import styled from "styled-components";

export const ProdustsList = ({ produstsCard }) => {
  return (
    <StyledUl>
      {produstsCard.map((item) => (
        <ProdustsItem
          key={item.id}
          image={item.image}
          name={item.name}
          rating={item.rating}
          price={item.price}
          count={item.count}
        />
      ))}
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
`;
