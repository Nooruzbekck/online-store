import styled from "styled-components";
import FacebookIcon from "../"

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="wrapper">
        <div className="container">
          <h1>Logo</h1>
          <div className="style">
            <h3>Adress:</h3>
            <a>USA, Colifornia</a>
          </div>
          <div className="style">
            <h3>Contact:</h3>
            <a href="#">1800 123 4567</a>
            <a href="#">javaria.y2b@gmail.com</a>
          </div>
          <div className="icons">icons</div>
        </div>
        <div className="box">
          <div className="display">
            <a href="">Link one </a>
            <a href="">Link two</a>
            <a href="">Link three</a>
            <a href="">Link four</a>
            <a href="">Link five</a>
          </div>
          <div className="display">
            <a href="">Link one </a>
            <a href="">Link two</a>
            <a href="">Link three</a>
            <a href="">Link four</a>
            <a href="">Link five</a>
          </div>
          <div className="display">
            <a href="">Link one </a>
            <a href="">Link two</a>
            <a href="">Link three</a>
            <a href="">Link four</a>
            <a href="">Link five</a>
          </div>
        </div>
      </div>
      <div className="footer-sine">
        <div className="crete_line"> </div>
        <a href="#">© 2023 Javaria. All rights reserved.</a>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  background-color: #333333;
  height: 100vh;
  .wrapper {
    display: flex;
    align-items: start;
    justify-content: space-between;
    padding: 70px 80px 0 80px;
  }
  .crete_line {
    width: 1130px;
    border-top: 1px solid white;
  }

  .container {
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
  }
  .display {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
  }
  .box {
    display: flex;
    gap: 50px;
  }
  .footer-sine {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 80px;
    margin-left: 10px;
  }
  .style {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  h3 {
    color: white;
    margin-bottom: 20px;
    margin-top: 10px;
  }
  h1 {
    color: white;
  }
  .icons {
    color: white;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;
