import { useEffect, useState } from "react";
import AdvertBar from "./AdvertBar/AdvertBar";
import SearchBar from "./SearchBar/SearchBar";
import "./Header.scss";

const Header = () => {
  const [isAdvertBarVisible, setIsAdvertBarVisible] = useState(false);

  useEffect(() => {
    setIsAdvertBarVisible(true);
  }, []);

  return (
    <div className="headerContainer">
      {isAdvertBarVisible && (
        <AdvertBar setIsAdvertBarVisible={setIsAdvertBarVisible} />
      )}
      <div className="header__options">
        <img
          src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/k_travels2.png"
          alt="travel"
        />
        <img
          src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/konga_pay.png"
          alt="KongaPay"
        />

        <img
          src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/new_konga_drinks.png"
          alt="drinks"
        />
        <img
          src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/konga_health.png"
          alt="KongaHealth"
        />
        <img
          src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/k_express2.png"
          alt="logistics"
        />
        <img
          src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/new_konga_groceries.png"
          alt="groceries"
        />
      </div>

      <div className="header__mainNav">
        <img
          className="header__mainNav--img"
          src="https://www.konga.com/_next/static/images/62f8a0d88e07573b4d46735aa24f3f04.png"
          alt="logo"
        />
        <p className="header__mainNav--text">Store Locator</p>
        <p className="header__mainNav--text">Sell on Konga</p>
        <SearchBar />
        <p className="header__mainNav--text">Help</p>
        <p className="header__mainNav--text">Login / Signup</p>
        <button className="header__mainNav--btn">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>local_grocery_store</title>
            <path d="M17.016 18q0.797 0 1.383 0.609t0.586 1.406-0.586 1.383-1.383 0.586-1.406-0.586-0.609-1.383 0.609-1.406 1.406-0.609zM0.984 2.016h3.281l0.938 1.969h14.813q0.422 0 0.703 0.305t0.281 0.727q0 0.047-0.141 0.469l-3.563 6.469q-0.563 1.031-1.734 1.031h-7.453l-0.891 1.641-0.047 0.141q0 0.234 0.234 0.234h11.578v2.016h-12q-0.797 0-1.383-0.609t-0.586-1.406q0-0.469 0.234-0.938l1.359-2.484-3.609-7.594h-2.016v-1.969zM6.984 18q0.797 0 1.406 0.609t0.609 1.406-0.609 1.383-1.406 0.586-1.383-0.586-0.586-1.383 0.586-1.406 1.383-0.609z"></path>
          </svg>
          My Cart <span>0</span>
        </button>
      </div>

      <div className="header__subNav">
        <ul>
          <li className="header__subNav--item--1">
            All Categories
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <title>dehaze</title>
              <path d="M2.016 5.484h19.969v2.016h-19.969v-2.016zM2.016 10.5h19.969v2.016h-19.969v-2.016zM2.016 15.516h19.969v1.969h-19.969v-1.969z"></path>
            </svg>
          </li>
          <li>Computers and Accessories</li>
          <li>Phones and Tablets</li>
          <li>Electronics</li>
          <li>Konga Fashion</li>
          <li>Home and Kitchen</li>
          <li>Baby, Kids and Toys</li>
          <li>Other Categories</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
