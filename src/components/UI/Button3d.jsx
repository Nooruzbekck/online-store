import React from "react";
import styled from "styled-components";

export const Button3d = ({ type, children, onClick, variant, ...props }) => {
  return (
    <StyledBtn type={type} onClick={onClick} variant={variant} {...props}>
      {children}
    </StyledBtn>
  );
};
const StyledBtn = styled.button`
  width: 215px;
  height: 57px;
  border-radius: 100px;
  color: #f4f4f4;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 5px 7px 0 rgba(74, 76, 108, 0.4);
  background-color: ${(props) =>
    props.variant === "blue" ? "#4a4c6c" : "#77794e"};
  border: ${(props) =>
    props.variant === "blue" ? "4px solid #7c7ea1" : "4px solid #9fa16d"};
`;
