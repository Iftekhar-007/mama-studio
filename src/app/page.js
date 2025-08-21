import { dividerClasses } from "@mui/material";
import Image from "next/image";
import Banner from "./Components/Banner";
import ShopByCategory from "./Components/ShopByCategory";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <div className="lg:mb-20 md:mb-10 mb-5">
        <Banner></Banner>
      </div>

      <div className="lg:mb-20 md:mb-10 mb-5">
        <ShopByCategory></ShopByCategory>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
