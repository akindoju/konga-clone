import "./App.scss";
import CarouselGrid from "./components/CarouselGrid/CarouselGrid";
import Header from "./components/Header/Header";
import Recommended from "./components/Recommended/Recommended";
import TodaysDeal from "./components/TodaysDeal/TodaysDeal";

function App() {
  return (
    <div className="container">
      <Header />
      <CarouselGrid />
      <Recommended />
      <div className="sponsoredProducts">Sponsored products</div>
      {/* <div className="todaysDeals">Today's Deals</div> */}
      <TodaysDeal />
      <div className="eidEssentials">Eid Essentials</div>
      <div className="bestSelling">Best Selling products</div>
      <div className="variety">Variety</div>
      <div className="brands">Brands</div>
      <div className="about">About</div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
