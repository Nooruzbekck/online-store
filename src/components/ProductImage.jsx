import React from "react";
import Botz from "../assets/image/Botz.png";
import Ked from "../assets/image/Obuv.two.png";
import Whiteshoes from "../assets/image/Obuv.third.png";
import loafers from "../assets/image/Obuv.fourth.png";
import classic from "../assets/image/Obuv.fifth.png";
import styled from "styled-components";

const ProductImage = () => {
  return (
    <StyledDiv>
      <StyleBtn>
        <StyleButtonOne>KIDS</StyleButtonOne>
      </StyleBtn>

      <StyledFirst src={Botz} alt="Shoes" />
      <StyleTwo>
        <StyleBtnWomen>WOMEN</StyleBtnWomen>
      </StyleTwo>

      <StyledTwo src={Ked} alt="Shoes" />
      <StyledThreeBtn>SNEAKERS</StyledThreeBtn>
      <StyledTree src={Whiteshoes} alt="Shoes" />
      <div>
        {" "}
        <StyledBoots>BOOTS</StyledBoots>
      </div>

      <StyledFour src={loafers} alt="Shoes" />
      <StyledMen>MEN</StyledMen>
      <StyledFive src={classic} alt="Shoes" />
    </StyledDiv>
  );
};

export default ProductImage;

const StyledFirst = styled.img`
  width: 100%;
`;

const StyledTwo = styled.img`
  width: 61.4%;
`;

const StyledTree = styled.img`
  width: 38.1%;
`;

const StyledFour = styled.img`
  width: 38.1%;
`;

const StyledFive = styled.img`
  width: 61.4%;
`;

const StyleButtonOne = styled.button`
  position: absolute;
  margin-top: 20%;
  z-index: 2;
  color: #fff;
  background-color: black;
  width: 13%;
  height: 7%;
  font-size: 16px;
  display: block;
  border: none;
`;

const StyledDiv = styled.div``;

const StyleBtn = styled.div`
  display: flex;
  justify-content: center;
`;

const StyleBtnWomen = styled.button`
  position: absolute;
  margin-top: 25%;
  z-index: 2;
  color: #fff;
  background-color: black;
  width: 13%;
  height: 7%;
  border: none;
  /* font-size: 1.2rem; */
`;

const StyleTwo = styled.div`
  display: flex;

  margin-left: 25%;
`;

const StyledThreeBtn = styled.button`
  position: absolute;
  margin-top: 25%;
  z-index: 2;
  color: #fff;
  background-color: black;
  width: 13%;
  height: 7%;
  /* font-size: 20px; */
  margin-left: 14%;
  border: none;
`;

const StyledBoots = styled.button`
  position: absolute;
  margin-top: 30%;
  z-index: 2;
  color: black;
  background-color: white;
  width: 13%;
  height: 7%;
  /* font-size: 20px; */
  margin-left: 12%;
  border: none;
`;

const StyledMen = styled.button`
  position: absolute;
  margin-top: 28.3%;
  z-index: 2;
  color: black;
  background-color: white;
  width: 13%;
  height: 7%;
  /* font-size: 20px; */
  margin-left: 22%;
  border: none;
`;
