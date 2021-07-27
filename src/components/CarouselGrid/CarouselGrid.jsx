import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import "./CarouselGrid.scss";

const CarouselGrid = () => {
  SwiperCore.use([
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
    EffectFade,
  ]);

  return (
    <div className="carouselGridContainer">
      <div className="carouselGridMain">
        <div className="carouselGridMain__item--1">
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <img
                className="carouselGridMain__item--img"
                src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1626705115/contentservice/unileverA-copy.jpg_ryGzyaZXRd.jpg"
                alt="carousel grid item 1"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="carouselGridMain__item--img"
                src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1627222693/contentservice/mobile%20copy.png_rJpizlo0d.png"
                alt="carousel grid item 1"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="carouselGridMain__item--img"
                src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1627222699/contentservice/auto%20copy.png_BkeM3Mls0O.png"
                alt="carousel grid item 1"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="carouselGridMain__item--img"
                src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1627222694/contentservice/electronics%20copy.png_Skoifgo0_.png"
                alt="carousel grid item 1"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="carouselGridMain__item--img"
                src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1627246120/contentservice/d2.png_r1lVABjAd.png"
                alt="carousel grid item 1"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="carouselGridMain__item--img"
                src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1626704097/contentservice/UPS.jpg_r1XJtWQRu.jpg"
                alt="carousel grid item 1"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="carouselGridMain__item--img"
                src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1627244994/contentservice/web%20banner%201.png_rkQTFSs0O.png"
                alt="carousel grid item 1"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="carouselGridMain__item--img"
                src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1627223537/contentservice/d1.png_ByUlUejRu.png"
                alt="carousel grid item 1"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="carouselGridMain__item--img"
                src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1626087191/contentservice/intel.jpg_BkbmgHJnu.jpg_ryTMyoYau.jpg"
                alt="carousel grid item 1"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="carouselGridMain__item--2">
          <img
            className="carouselGridMain__item--img"
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1626364512/contentservice/10.gif_BJwDqC66u.gif"
            alt="carousel grid item 2"
          />
        </div>

        <div className="carouselGridMain__item--3">
          <img
            className="carouselGridMain__item--img"
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1626364498/contentservice/fitness.png_rJKLqRTad.png"
            alt="carousel grid item 3"
          />
        </div>

        <div className="carouselGridMain__item--4">
          <img
            className="carouselGridMain__item--img"
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1626012718/contentservice/3.png_HyjQ2ddpd.png"
            alt="carousel grid item 4"
          />
        </div>

        <div className="carouselGridMain__item--5">
          <img
            className="carouselGridMain__item--img"
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1626012730/contentservice/4.png_H1fHh_daO.png"
            alt="carousel grid item 5"
          />
        </div>
      </div>

      <div className="carouselGridSub">
        <div className="carouselGridSub__item">
          <img
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1620131725/contentservice/travel2.0.png_S1NcJa0PO.png"
            alt="Book flights"
          />
        </div>
        <div className="carouselGridSub__item">
          <img
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1620131725/contentservice/kongapay2.0.png_H1Nq1pAPO.png"
            alt="Pay Bills"
          />
        </div>
        <div className="carouselGridSub__item">
          <img
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1620131724/contentservice/konga.%20prime%20copy2.0.png_ryVqJTAw_.png"
            alt="Free Delivery"
          />
        </div>
        <div className="carouselGridSub__item">
          <img
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1620131733/contentservice/offline%20stores2.0.png_Hy851T0vu.png"
            alt="Online Stores"
          />
        </div>
        <div className="carouselGridSub__item">
          <img
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1620131725/contentservice/brand%20stores2.0.png_SJH91TCvu.png"
            alt="Brand Stores"
          />
        </div>
        <div className="carouselGridSub__item">
          <img
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1620131726/contentservice/konga%20blog%20copy2.0.png_rkH91pCDu.png"
            alt="Konga Blog"
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselGrid;
