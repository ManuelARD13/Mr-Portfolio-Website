import CustomIcon from "../common/CustomIcon";
import TSIcon from "../common/CustomIcon";
import { FaMapLocationDot } from "react-icons/fa6";
import {
  BiLogoGmail,
  BiLogoTelegram,
  BiLogoGithub,
  BiLogoLinkedinSquare,
} from "react-icons/bi";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__card box-shadow">
        <div className="contact__card-left">
          <div className="contact__card-logo">
            <TSIcon />
            <h6 className="contact__card-name">Manuel A. Rojas</h6>
          </div>
          <div className="contact__card-img" onClick={() => (location.href = "/")}>
            <p className="contact__card-img-logo">Mr.</p>
            <p className="contact__card-img-title">Front-end Engineer</p>
          </div>
        </div>
        <div className="contact__card-right">
          <h6 className="contact__card-title">Contact Info</h6>
          <ul className="contact__card-details">
            <li className="contact__card-details-item">
              <CustomIcon>
                <BiLogoTelegram />
              </CustomIcon>
              <a href="https://t.me/ManuelARD13" target="_blank">@ManuelARD13</a>
            </li>
            <li className="contact__card-details-item">
              <CustomIcon>
                <BiLogoGmail />
              </CustomIcon>
              <a href="mailto:duranalejandro661@gmail">duranalejandro661@gmail.com</a>
            </li>
            <li className="contact__card-details-item">
              <CustomIcon>
                <BiLogoLinkedinSquare />
              </CustomIcon>
              <a href="https://www.linkedin.com/in/manuelard13" target="_blank">Manuel Alejandro Rojas Duran</a>
            </li>
            <li className="contact__card-details-item">
              <CustomIcon>
                <BiLogoGithub />
              </CustomIcon>
              <a href="https://github.com/ManuelARD13" target="_blank">ManuelARD13</a>
            </li>
          </ul>
          <div className="contact__card-footer">
            <CustomIcon>
              <FaMapLocationDot />
            </CustomIcon>
            <p>Autonomous City of Buenos Aires, Argentina. 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
