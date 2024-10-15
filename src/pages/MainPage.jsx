import { FotoSlider } from "../components/Slider";
import ProductImage from "../components/ProductImage";
import { Produsts } from "../components/Cards/Produsts";

const MainPage = () => {
  return (
    <div>
      <FotoSlider />
      <Produsts
        showLine={true}
        showTitle={true}
        showSellingButton={true}
      ></Produsts>
      <ProductImage />
    </div>
  );
};

export default MainPage;
