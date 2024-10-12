import styled from "styled-components";
import { PRODUCTS } from "./products";
import { ProdustsList } from "./ProdustsList";

export const Produsts = () => {
  return (
    <StyledDiv>
      <ProdustsList produstsCard={PRODUCTS} />
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
  padding: 45px;
`;
