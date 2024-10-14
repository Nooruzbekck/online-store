import React from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";
import FavoriteIcon from "../../assets/icons/favorite-isons.svg?react"

export const ProdustsItem = ({ image, name, rating, price, count, showCart}) => {
  return (
    <StyledLi>
      <StyledDiv>
        <StyledImg src={image} alt="" />      
      </StyledDiv>

      <StyledDateDiv>
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
      </StyledDateDiv>

      <StyledButtonWrapper>
        <Button>Add To Cart</Button>
      </StyledButtonWrapper>
    </StyledLi>
  );
};

const StyledButtonWrapper = styled.div`
  position: absolute;
  margin-top: 252px;
  z-index: 2;
`;

const StyledLi = styled.li`
  width: 270px;
  height: 400px;
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  &:hover ${StyledButtonWrapper} {
    opacity: 1;
    transform: translateY(0); /* Поднимаем кнопку */
    z-index: 2;
  }
`;


const StyledDateDiv = styled.div`
  margin-top: 16px;
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
  width: 270px;
  height: 250px;
  background-size: contain;
`;
const StyledName = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
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
  margin-top: 10px;
`;
