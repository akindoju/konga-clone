import "./App.scss";
import About from "./components/About/About";
import { BestSelling } from "./components/BestSelling/BestSelling";
import Brands from "./components/Brands/Brands";
import CarouselGrid from "./components/CarouselGrid/CarouselGrid";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MidAdvert from "./components/MidAdvert/MidAdvert";
import Recommended from "./components/Recommended/Recommended";
import TodaysDeal from "./components/TodaysDeal/TodaysDeal";
import Variety from "./components/Variety/Variety";

function App() {
  return (
    <div className="container">
      <Header />
      <CarouselGrid />
      <Recommended />
      {/* <div className="sponsoredProducts">Sponsored products</div> */}
      <BestSelling />
      <TodaysDeal />
      <MidAdvert />
      <Variety />
      <Brands />
      <About />
      <Footer />
    </div>
  );
}

export default App;
