import React from "react";
import styled from "styled-components";

export const ProdustsItem = ({ image, name, rating, price, count }) => {
  return (
    <StyledLi>
      <StyledDiv>
        <StyledImg src={image} alt="" />
      </StyledDiv>
      <StyledName>{name}</StyledName>
      <StyledTag>${price}</StyledTag>
      <StyledCountDiv>
        <div>
          <StyledContainerRating src={rating} alt="" />
          <StyledContainerRating src={rating} alt="" />
          <StyledContainerRating src={rating} alt="" />
          <StyledContainerRating src={rating} alt="" />
          <StyledContainerRating src={rating} alt="" />
        </div>
        <StyledTag>{count}</StyledTag>
      </StyledCountDiv>
    </StyledLi>
  );
};

const StyledLi = styled.li`
  width: 400px;
  height: 400px;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const StyledTag = styled.p`
  color: black;
  opacity: 0.5;
  font-weight: 600;
`;
const StyledDiv = styled.div`
  width: 300px;
  height: 300px;
  background-color: #e9e9eb;
  border-radius: 4px;
`;

const StyledImg = styled.img`
  width: 300px;
  height: 280px;
  background-size: contain;
`;
const StyledName = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
const StyledContainerRating = styled.img`
  width: 20px;
  height: 20px;
`;
const StyledCountDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
