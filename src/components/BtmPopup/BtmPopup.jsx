import "./BtmPopup.scss";

const BtmPopup = ({ setIsBtmPopupVisible }) => {
  return (
    <div className="btmPopup">
      <img
        src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1627296470/contentservice/fitness2.png_Bk6AGf3C_.png"
        alt=""
      />

      <svg
        className="closeBtmPopup"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        onClick={() => setIsBtmPopupVisible(false)}
      >
        <title>close-solid</title>
        <path d="M2.93 17.070c-1.884-1.821-3.053-4.37-3.053-7.193 0-5.523 4.477-10 10-10 2.823 0 5.372 1.169 7.19 3.050l0.003 0.003c1.737 1.796 2.807 4.247 2.807 6.947 0 5.523-4.477 10-10 10-2.7 0-5.151-1.070-6.95-2.81l0.003 0.003zM11.4 10l2.83-2.83-1.41-1.41-2.82 2.83-2.83-2.83-1.41 1.41 2.83 2.83-2.83 2.83 1.41 1.41 2.83-2.83 2.83 2.83 1.41-1.41-2.83-2.83z"></path>
      </svg>
    </div>
  );
};

export default BtmPopup;
