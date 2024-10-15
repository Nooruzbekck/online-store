import React, { useContext } from "react";
import styled from "styled-components";
import HeaderIcon from "../assets/icons/head-icons.svg?react";
import FavoriteIcon from "../assets/icons/favorite-isons.svg?react";
import BasketIcon from "../assets/icons/basket-icons.svg?react";
import ContactIcon from "../assets/icons/contact-icons.svg?react";
import { RouteContext } from "../context/RouteContext";

const Header = () => {
  const { onPathChange } = useContext(RouteContext);
  return (
    <StyledHeader>
      <StyledNavDiv>
        <HeaderIcon onClick={() => onPathChange("/")} />
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
        <FavoriteIcon onClick={() => onPathChange("favorite")} />
        <BasketIcon onClick={() => onPathChange("cart")} />
        <ContactIcon />
      </StyledIconsDiv>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  background-color: #fff;
  width: 100%;
  padding: 20px 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
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
