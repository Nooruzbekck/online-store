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
  margin-top: 381px;
  z-index: 2;
  color: #fff;
  background-color: black;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 5%;
  display: block;
  border: none;
  padding: 16px 28px;
`;

const StyledDiv = styled.div``;

const StyleBtn = styled.div`
  display: flex;
  justify-content: center;
`;

const StyleBtnWomen = styled.button`
  position: absolute;
  z-index: 2;
  color: #fff;
  font-size: 18px;
  background-color: black;
  padding: 16px 28px;
  font-weight: 700;
  letter-spacing: 5%;
  margin-top: 428px;
  border: none;
 
`;

const StyleTwo = styled.div`
  display: flex;

  margin-left: 25%;
`;

const StyledThreeBtn = styled.button`
  position: absolute;
  z-index: 2;
  color: #fff;
  background-color: black;
  font-size: 18px;
  padding: 16px 28px;
  font-weight: 700;
  letter-spacing: 5%;
  margin: 428px 198px 60px 199px;
  border: none;
`;

const StyledBoots = styled.button`
  position: absolute;
  z-index: 2;
  color: black;
  background-color: white;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 5%;
  padding: 16px 28px;
  margin: 428px 216px 60px 215px; 
  border: none;
`;

const StyledMen = styled.button`
  position: absolute;
  z-index: 2;
  color: black;
  background-color: white;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 5%;
  padding: 16px 28px;
  margin: 428px 395px 60px 394px;
  border: none;
`;
