import { useContext } from "react";
import { RouteContext } from "../context/RouteContext";
import Login from "../components/Auth/Login";
import MainPage from "../pages/MainPage";
import CartPage from "../pages/CartPage";
import { FavoritePage } from "../pages/FavoritePage";
import Header from "./Header";
import { Footer } from "./Footer";
import styled from "styled-components";

export const MainLayout = () => {
  const { path } = useContext(RouteContext);
  let content;

  switch (path) {
    case "sign-in":
      {
        content = <Login />;
      }
      break;
    case "/":
      {
        content = <MainPage />;
      }
      break;
    case "favorite":
      {
        content = <FavoritePage />;
      }
      break;
    case "cart": {
      content = <CartPage />;
    }
  }

  return (
    <div>
      <Header />
      <Content>{content}</Content>
      <Footer />
    </div>
  );
};

const Content = styled.div`
  margin-top: 90px;
`;
