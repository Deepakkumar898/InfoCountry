import { MdPlace } from "react-icons/md";
import footerData from "../api/footerData.json";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import "./footer.css";

export const Footer = () => {
  const iconMap = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="grid grid-three-cols">
          {footerData.map((currElm) => {
            return (
              <div key={currElm.icon} className="footer-contact">
                <div className="icon">{iconMap[currElm.icon]}</div>
                <div className="footer-contact-text">
                  <p>{currElm.title}</p>
                  <p>{currElm.details}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
