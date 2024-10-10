import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledTagA href="#">Women</StyledTagA>
        <StyledTagA href="#">Men</StyledTagA>
        <StyledTagA href="#">Kids</StyledTagA>
        <StyledTagA href="#">Classic</StyledTagA>
        <StyledTagA href="#">Sport</StyledTagA>
        <StyledTagA href="#">Sale</StyledTagA>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  background-color: #fff;
  width: 95%;
  margin-top: 3px;
  margin-left: 34px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const StyledNav = styled.nav`
    display: flex;
    gap: 24px;
`
const StyledTagA = styled.a`
    font-size: 16px;
    text-decoration: none;
    font-weight: 600;
    color: #181818;
    font-family: "Cabinet Grotesk";
`
