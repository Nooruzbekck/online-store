import React from "react";
import styled from "styled-components";

export const Input = ({
  value,
  onChange,
  placeholder,
  type = "text",
  ...props
}) => {
  return (
    <StyledInput
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  );
};

const StyledInput = styled.input`
  background-color: white;
  width: 500px;
  border-radius: 10px;
  width: Fill (408px) px;
  height: Hug (48px) px;
  padding: 12px 16px 12px 16px;
  gap: 12px;
  border-radius: 4px 0px 0px 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
`;
