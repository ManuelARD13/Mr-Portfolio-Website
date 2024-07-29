import CustomIcon from "../common/CustomIcon";
import TSIcon from "../common/CustomIcon";
import { FaMapLocationDot } from "react-icons/fa6";
import {
  BiLogoGmail,
  BiLogoTelegram,
  BiLogoGithub,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
//TODO: Add links to each social media

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__card box-shadow">
        <div className="contact__card-left">
          <div className="contact__card-logo">
            <TSIcon />
            <h6 className="contact__card-name">Manuel A. Rojas</h6>
          </div>
          <div className="contact__card-img">
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
              <p>t.me/ManuelARD13</p>
            </li>
            <li className="contact__card-details-item">
              <CustomIcon>
                <BiLogoGmail />
              </CustomIcon>
              <p>duranalejandro661@gmail.com</p>
            </li>
            <li className="contact__card-details-item">
              <CustomIcon>
                <BiLogoLinkedinSquare />
              </CustomIcon>
              <p>linkedin.com/in/manuelard13</p>
            </li>
            <li className="contact__card-details-item">
              <CustomIcon>
                <BiLogoGithub />
              </CustomIcon>
              <p>github.com/ManuelARD13</p>
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
