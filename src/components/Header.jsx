import React from "react";
import styled from "styled-components";
import HeaderIcon from "../assets/icons/head-icons.svg?react";
import FavoriteIcon from "../assets/icons/favorite-isons.svg?react";
import BasketIcon from "../assets/icons/basket-icons.svg?react";
import ContactIcon from "../assets/icons/contact-icons.svg?react";

const Header = () => {
  return (
    <StyledHeader>
      <StyledNavDiv>
        <HeaderIcon />
        <StyledNav>
          <StyledTagA href="#">Women</StyledTagA>
          <StyledTagA href="#">Men</StyledTagA>
          <StyledTagA href="#">Kids</StyledTagA>
          <StyledTagA href="#">Classic</StyledTagA>
          <StyledTagA href="#">Sport</StyledTagA>
          <StyledTagA href="#">Sale</StyledTagA>
        </StyledNav>
      </StyledNavDiv>

      <StyledIconsDiv>
        <FavoriteIcon />
        <BasketIcon />
        <ContactIcon />
      </StyledIconsDiv>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNavDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

const StyledTagA = styled.a`
  font-size: 16px;
  font-weight: 700;
  color: #181818;
  padding: 15px 15px;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 24px;
`;
const StyledIconsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;
