import React from "react";
import styled from "styled-components";

export const Button = ({ onClick, type, disabled, children, ...props }) => {
  return (
    <StyledButton type={type} onClick={onClick} {...props} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 270px;
  height: 41px;
  top: 209px;
  gap: 0px;
  border-radius: 0px 0px 4px 4px;
  opacity: 0px;

  font-size: 16px;
  font-weight: 500;

  background: #000000;
  color: white;
`;
