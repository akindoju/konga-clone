import "./App.scss";
import About from "./components/About/About";
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
      <div className="sponsoredProducts">Sponsored products</div>
      <TodaysDeal />
      <MidAdvert />
      <Variety />
      <Brands />
      <About />
      {/* <div className="footer">Footer</div> */}
      <Footer />
    </div>
  );
}

export default App;
