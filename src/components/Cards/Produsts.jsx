import styled from "styled-components";
import { products } from "./products";
import { ProdustsList } from "./ProdustsList";

export const Produsts = () => {
  return (
    <StyledDiv>
      <ProdustsList produstsCard={products} />
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
  padding: 43px;
`;
