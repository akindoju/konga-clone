import "./TodaysDeal.scss";

const TodaysDeal = () => {
  return (
    <div className="todaysDealContainer">
      <div className="todaysDeal__heading">
        <h1 className="todaysDeal__title">Today's Deal</h1>
        <p className="todaysDeal__link">See All Items</p>
      </div>
      <hr className="horizontalLine" />

      <div className="todaysDeal__itemContainer">
        <div className="todaysDeal__item">
          <img
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/N/J/67343_1611415493.jpg"
            alt="Samsung Galaxy A12"
            className="todaysDeal__item--img"
          />
          <div className="todaysDeal__item--details">
            <h1 className="todaysDeal__item--name">
              Samsung Galaxy A12 - Dual Sim - ...
            </h1>
            <h2 className="todaysDeal__item--price">
              ₦77,999
              <span className="todaysDeal__item--price--striked">₦95,000</span>
            </h2>
            <h4 className="todaysDeal__item--price--saved">You save ₦17,001</h4>
          </div>
        </div>

        <div className="todaysDeal__item">
          <img
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/X/X/170342_1624465734.png"
            alt="Coca Cola Combo Deal"
            className="todaysDeal__item--img"
          />
          <div className="todaysDeal__item--details">
            <h1 className="todaysDeal__item--name">
              Coca Cola Combo Deal - Buy 1 Cas...
            </h1>
            <h2 className="todaysDeal__item--price">₦1,400</h2>
          </div>
        </div>

        <div className="todaysDeal__item">
          <img
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/K/M/53096_1595603682.jpg"
            alt="Apple iPhone 11"
            className="todaysDeal__item--img"
          />
          <div className="todaysDeal__item--details">
            <h1 className="todaysDeal__item--name">
              Apple iPhone 11 - 6.1" - 4GB RAM...
            </h1>
            <h2 className="todaysDeal__item--price">
              ₦348,999
              <span className="todaysDeal__item--price--striked">₦400,000</span>
            </h2>
            <h4 className="todaysDeal__item--price--saved">You save ₦51,001</h4>
          </div>
        </div>

        <div className="todaysDeal__item">
          <img
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/L/F/118566_1622199373.jpg"
            alt="iTEC 32 Hd Led Television"
            className="todaysDeal__item--img"
          />
          <div className="todaysDeal__item--details">
            <h1 className="todaysDeal__item--name">
              iTEC 32" Hd Led Television
            </h1>
            <h2 className="todaysDeal__item--price">
              ₦66,960
              <span className="todaysDeal__item--price--striked">₦74,960</span>
            </h2>
            <h4 className="todaysDeal__item--price--saved">You save ₦8,000</h4>
          </div>
        </div>

        <div className="todaysDeal__item">
          <img
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/R/67343_1615998290.jpg"
            alt="Samsung Galaxy A52"
            className="todaysDeal__item--img"
          />
          <div className="todaysDeal__item--details">
            <h1 className="todaysDeal__item--name">
              Samsung Galaxy A52 - 6.5" - 6GB ...
            </h1>
            <h2 className="todaysDeal__item--price">₦174,999</h2>
          </div>
        </div>

        <div className="todaysDeal__item">
          <img
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/X/M/63855_1620033542.jpg"
            alt="PadKing 10.1 Inch"
            className="todaysDeal__item--img"
          />
          <div className="todaysDeal__item--details">
            <h1 className="todaysDeal__item--name">
              PadKing 10.1 Inch - 4G - Octa Co...
            </h1>
            <h2 className="todaysDeal__item--price">
              ₦49,899
              <span className="todaysDeal__item--price--striked">₦120,000</span>
            </h2>
            <h4 className="todaysDeal__item--price--saved">You save ₦70,101</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysDeal;
