import "./MidAdvert.scss";

const MidAdvert = () => {
  return (
    <div className="midAdvertContainer">
      <div className="midAdvertMain">
        <img
          src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1627046765/contentservice/5k%20web.png_By4dQSuC_.png"
          alt="Eid Advert 1"
        />
      </div>

      <div className="midAdvertSub">
        <div className="midAdvertSub__item">
          <img
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1626012718/contentservice/2%20bottom%20a_.png_BkBN3OOTd.png"
            alt="Eid Advert 2"
          />
        </div>

        <div className="midAdvertSub__item">
          <img
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1626012730/contentservice/2%20bottom%20b.png_Hygrh__Td.png"
            alt="Eid Advert 3"
          />
        </div>
      </div>
    </div>
  );
};

export default MidAdvert;
