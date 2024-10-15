import styled from "styled-components";
// import { PRODUCTS } from "../components/Cards/products";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export const FavoritePage = () => {
  const { products } = useContext(ProductContext);
  
  const filteredProducts = products.filter((item) => item.isFavourite);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {filteredProducts.map((product) => (
        <StyledLi key={product.id}>
          <StyledDiv>
            <StyledImg src={product.image} alt="" />
            <IconFavorite
              src="https://i.pinimg.com/736x/55/55/55/5555556a6989a5d12c0ef128b406fa00.jpg"
              alt=""
              width={30}
            />
          </StyledDiv>

          <StyledDateDiv>
            <StyledName>{product.name}</StyledName>
            <StyledTag>${product.price}</StyledTag>

            <StyledCountDiv>
              <div>
                <StyledContainerRating src={product.rating} alt="" />
                <StyledContainerRating src={product.rating} alt="" />
                <StyledContainerRating src={product.rating} alt="" />
                <StyledContainerRating src={product.rating} alt="" />
                <StyledContainerRating src={product.rating} alt="" />
              </div>

              <StyledTag>{product.count}</StyledTag>
            </StyledCountDiv>
          </StyledDateDiv>

          {/* {quantity ? null : (
            <StyledButtonWrapper>
              <Button onClick={onAddToCart}>Add To Cart</Button>
            </StyledButtonWrapper>
          )} */}
        </StyledLi>
      ))}
    </div>
  );
};

const StyledButtonWrapper = styled.div`
  position: absolute;
  margin-top: 252px;
  z-index: 2;
  > button {
    width: 300px;
  }
`;
const IconFavorite = styled.img`
  position: absolute;
  z-index: 19;
  right: 20px;
`;
const Quantity = styled.h3`
  position: absolute;
  top: 20px;
  right: 20px;
  top: 20px;
`;

const StyledLi = styled.li`
  width: 270px;
  height: 400px;
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  &:hover ${StyledButtonWrapper} {
    opacity: 1;
    transform: translateY(0); /* Поднимаем кнопку */
    z-index: 2;
  }
`;

const StyledDateDiv = styled.div`
  margin-top: 16px;
`;

const StyledTag = styled.p`
  color: black;
  opacity: 0.5;
  font-weight: 600;
`;
const StyledDiv = styled.div`
  /* width: 300px; */
  height: 300px;
  background-color: #e9e9eb;
  border-radius: 4px;
  position: relative;
`;

const StyledImg = styled.img`
  width: 270px;
  height: 250px;
  background-size: contain;
`;
const StyledName = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`;
const StyledContainerRating = styled.img`
  width: 20px;
  height: 20px;
`;
const StyledCountDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
`;
