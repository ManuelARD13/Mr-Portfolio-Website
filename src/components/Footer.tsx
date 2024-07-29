import Menu from '../common/Menu/Menu';
import CustomIcon from '../common/CustomIcon';
import {
  BiLogoGmail,
  BiLogoTelegram,
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiLogoWhatsapp
} from "react-icons/bi";

function Footer() {
  return (
    <footer className="footer">
        <div className="footer__menu-container">
          <Menu className="footer__menu" />
        </div>
        <div className="footer__social-media">
          <CustomIcon>
            <BiLogoGithub />
          </CustomIcon>
          <CustomIcon>
            <BiLogoLinkedinSquare />
          </CustomIcon>
          <CustomIcon>
            <BiLogoTelegram />
          </CustomIcon>
          <CustomIcon>
            <BiLogoGmail />
          </CustomIcon>
          <CustomIcon>
            <BiLogoWhatsapp />
          </CustomIcon>
        </div>
        <div className="footer__copyright">
          <p>©Copyright. 2024 Manuel A. Rojas</p>
        </div>
      </footer>
  );
}

export default Footer;