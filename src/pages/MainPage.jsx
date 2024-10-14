import React from "react";
import { FotoSlider } from "../components/Slider";
import Header from "../components/Header";
import ProductImage from "../components/ProductImage";
import { Footer } from "../layout/Footer";
import { Produsts } from "../components/Cards/Produsts";
import { PRODUCTS } from "../components/Cards/products";

const MainPage = () => {
  return (
    <div>
      <Header />
      <FotoSlider />
      <Produsts showButton={true}></Produsts>
      <Produsts
        showLine={true}
        showTitle={true}
        showSellingButton={true}
      ></Produsts>
      <ProductImage />
      <Footer />
    </div>
  );
};

export default MainPage;
