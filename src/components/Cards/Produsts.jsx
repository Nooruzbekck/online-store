import styled from "styled-components";
import { PRODUCTS } from "./products";
import { ProdustsList } from "./ProdustsList";
import { Button3d } from "../UI/Button3d";
import { Button } from "../UI/Button";
import TitleIcon from "../../assets/icons/best-selling.svg?react";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

export const Produsts = ({
  showButton,
  showSellingButton,
  showLine,
  showTitle,
}) => {
  const { products } = useContext(ProductContext);
  return (
    <StyledDiv>
      {showLine && <StyledLineDiv> </StyledLineDiv>}
      {showTitle && (
        <TitleIcon style={{ marginLeft: "78px", marginBottom: "85px" }} />
      )}

      {showButton && (
        <StyledButtonsDiv>
          <Button3d variant={"blue"}>NEW ARRIVALS</Button3d>
          <Button3d>WHAT'S TRENDING</Button3d>
        </StyledButtonsDiv>
      )}

      <ProdustsList produstsCard={products} />

      {showSellingButton && (
        <StyledButton>
          <Button style={{ width: "140px" }}>SHOP NOW</Button>
        </StyledButton>
      )}
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
  margin-top: 50px;
  padding: 45px;
`;

const StyledLineDiv = styled.div`
  width: 1300px;
  border: 1px solid black;
  opacity: 33%;
  margin-left: 80px;
  margin-bottom: 57px;
`;

const StyledButtonsDiv = styled.div`
  margin-bottom: 85px;
  display: flex;
  flex-direction: row;
  gap: 36px;
`;

const StyledButton = styled.div`
  margin-left: 655px;
  margin-top: 50px;
`;

const StyledTagH1 = styled.h1`
  font-family: "Geist";
`;
