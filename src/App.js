import "./App.scss";
import Brands from "./components/Brands/Brands";
import CarouselGrid from "./components/CarouselGrid/CarouselGrid";
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
      <div className="sponsoredProducts">Sponsored products</div>
      <TodaysDeal />
      <MidAdvert />
      <Variety />
      {/* <div className="brands">Brands</div> */}
      <Brands />
      <div className="about">About</div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
