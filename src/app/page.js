import { dividerClasses } from "@mui/material";
import Image from "next/image";
import Banner from "./Components/Banner";
import ShopByCategory from "./Components/ShopByCategory";
import Footer from "./Components/Footer";
import GetData from "./products/Components/getData";

export default function Home() {
  return (
    <div>
      <div className="lg:mb-20 md:mb-10 mb-5">
        <Banner></Banner>
      </div>

      <div className="lg:mb-20 md:mb-10 mb-5">
        <ShopByCategory></ShopByCategory>
      </div>

      <div className="lg:mb-20 md:mb-10 mb-5">
        <GetData></GetData>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
