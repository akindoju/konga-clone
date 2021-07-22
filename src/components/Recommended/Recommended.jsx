import "./Recommended.scss";

const Recommended = () => {
  return (
    <div className="recommendedContainer">
      <div className="recommendedMain">
        <div className="recommendedMain__heading">
          <h1 className="recommendedMain__title">Recommended for you</h1>
          <p className="recommendedMain__link">See All Items</p>
        </div>
        <hr className="horizontalLine" />

        <div className="recommendedMain__itemContainer">
          <div className="recommendedMain__item">
            <img
              src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/H/X/57212_1613815526.jpg"
              alt="McAfee Total Protection 2021"
              className="recommendedMain__item--img"
            />
            <div className="recommendedMain__item--details">
              <h1 className="recommendedMain__item--name">
                McAfee Total Protection 2021 1 D...
              </h1>
              <h2 className="recommendedMain__item--price">₦6,000 </h2>
            </div>
          </div>

          <div className="recommendedMain__item">
            <img
              src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/E/118566_1578404432.jpg"
              alt="Polystar 32-inch Led Tv"
              className="recommendedMain__item--img"
            />
            <div className="recommendedMain__item--details">
              <h1 className="recommendedMain__item--name">
                Polystar 32-inch Led Tv - Pv-hd3...
              </h1>
              <h2 className="recommendedMain__item--price">
                ₦69,120
                <span className="recommendedMain__item--price--striked">
                  ₦73,290
                </span>
              </h2>
              <h4 className="recommendedMain__item--price--saved">
                You save ₦4,170
              </h4>
            </div>
          </div>

          <div className="recommendedMain__item">
            <img
              src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Y/P/_1617104186.jpg"
              alt="Vivo Y20 Nebula Blue"
              className="recommendedMain__item--img"
            />
            <div className="recommendedMain__item--details">
              <h1 className="recommendedMain__item--name">
                Vivo Y20 Nebula Blue - 3gb Ram, ...
              </h1>
              <h2 className="recommendedMain__item--price">
                ₦73,615
                <span className="recommendedMain__item--price--striked">
                  ₦76,500
                </span>
              </h2>
              <h4 className="recommendedMain__item--price--saved">
                You save ₦2,885
              </h4>
            </div>
          </div>

          <div className="recommendedMain__item">
            <img
              src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/C/J/118566_1612452596.jpg"
              alt="Nokia Grey 3.4"
              className="recommendedMain__item--img"
            />
            <div className="recommendedMain__item--details">
              <h1 className="recommendedMain__item--name">
                Nokia Grey 3.4 - 6.39" Hd+4gb
              </h1>
              <h2 className="recommendedMain__item--price">
                ₦56,750
                <span className="recommendedMain__item--price--striked">
                  ₦58,000
                </span>
              </h2>
              <h4 className="recommendedMain__item--price--saved">
                You save ₦1,250
              </h4>
            </div>
          </div>

          <div className="recommendedMain__item">
            <img
              src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/T/C/118566_1620808982.jpg"
              alt="Lenovo Ideapad L3"
              className="recommendedMain__item--img"
            />
            <div className="recommendedMain__item--details">
              <h1 className="recommendedMain__item--name">
                Lenovo Ideapad L3 151ML05, Intel...
              </h1>
              <h2 className="recommendedMain__item--price">
                ₦229,999
                <span className="recommendedMain__item--price--striked">
                  ₦300,000
                </span>
              </h2>
              <h4 className="recommendedMain__item--price--saved">
                You save ₦70,001
              </h4>
            </div>
          </div>

          <div className="recommendedMain__item">
            <img
              src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/Q/118566_1615976339.jpg"
              alt="Dell Vostro 3500"
              className="recommendedMain__item--img"
            />
            <div className="recommendedMain__item--details">
              <h1 className="recommendedMain__item--name">
                Dell Vostro 3500, 11th Gen, Inte...
              </h1>
              <h2 className="recommendedMain__item--price">
                ₦199,999
                <span className="recommendedMain__item--price--striked">
                  ₦208,500
                </span>
              </h2>
              <h4 className="recommendedMain__item--price--saved">
                You save ₦8,501
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="recommendedSub">
        <div className="recommendedSub__item">
          <img
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1626012718/contentservice/groceries.png_BJi7huuaO.png"
            alt="Groceries"
          />
        </div>

        <div className="recommendedSub__item">
          <img
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1626012728/contentservice/kitchenn%20needs.png_BylHh_d6u.png"
            alt="Kitchen Needs"
          />
        </div>

        <div className="recommendedSub__item">
          <img
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1626012731/contentservice/video%20games.png_SyzHhO_ad.png"
            alt="Video Games"
          />
        </div>

        <div className="recommendedSub__item">
          <img
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1626012727/contentservice/agric.png_S1aE3u_Td.png"
            alt="Fertilizers ,seeds and more"
          />
        </div>

        <div className="recommendedSub__item">
          <img
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1626012736/contentservice/hometheatres.png_rkQHn_uad.png"
            alt="Home Theatres"
          />
        </div>

        <div className="recommendedSub__item">
          <img
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1626012728/contentservice/furntures.png_Hkerhudp_.png"
            alt="Furniture"
          />
        </div>
      </div>
    </div>
  );
};

export default Recommended;
