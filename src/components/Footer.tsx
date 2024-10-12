import Menu from "@common/Menu/Menu";
import CustomIcon from "@common/CustomIcon";
import {
  BiLogoGmail,
  BiLogoTelegram,
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiLogoWhatsapp,
} from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { useAppContext } from "@context/AppContext";

const socialMediaIcons: { icon: JSX.Element; link: string }[] = [
  {
    icon: <BiLogoGithub />,
    link: "https://github.com/manuelard13",
  },
  {
    icon: <BiLogoLinkedinSquare />,
    link: "https://www.linkedin.com/in/manuelard13/",
  },
  {
    icon: <BiLogoTelegram />,
    link: "https://t.me/ManuelARD13",
  },
  {
    icon: <BiLogoGmail />,
    link: "mailto:duranalejandro661@gmail",
  },
  {
    icon: <BiLogoWhatsapp />,
    link: "https://api.whatsapp.com/send/?phone=5491124090119&text&type=phone_number&app_absent=0",
  },
];

function Footer() {
  const { footerData, lenguage } = useAppContext();
  //TODO: Adjust spacing between colums in the right section
  //TODO: Add grid columns adjusting behavior depending on the screen size
  //TODO: Check the footer position behavior

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer__text-container">
          <p className="footer__text-logo">Mr.</p>
          <p>
            {footerData}
          </p>
        </div>
        <div className="footer__menu-container">
          <h5>Menu</h5>
          <Menu className="footer__menu" />
        </div>
        <div className="footer__social-media">
          <h5>
            {lenguage === "en" && "Social Media"}
            {lenguage === "es" && "Redes Sociales"}
          </h5>
          <div className="footer__social-media-icons">
            {socialMediaIcons.map(({ icon, link }) => (
              <a href={link} target="_blank" key={link}>
                <CustomIcon>{icon}</CustomIcon>
              </a>
            ))}
          </div>
        </div>
        <div className="footer__contact_container">
          <h5>
            {lenguage === "en" && "Contact"}
            {lenguage === "es" && "Contacto"}
          </h5>
          <ul className="footer__contact-details">
            <li className="footer__contact-details-item">
              <CustomIcon>
                <BiLogoTelegram />
              </CustomIcon>
              <a href="https://t.me/ManuelARD13" target="_blank">
                @ManuelARD13
              </a>
            </li>
            <li className="footer__contact-details-item">
              <CustomIcon>
                <BiLogoGmail />
              </CustomIcon>
              <a href="mailto:duranalejandro661@gmail">
                duranalejandro661@gmail.com
              </a>
            </li>
            <li className="footer__contact-details-item">
              <CustomIcon>
                <BiLogoLinkedinSquare />
              </CustomIcon>
              <a href="https://www.linkedin.com/in/manuelard13" target="_blank">
                Manuel Alejandro Rojas Duran
              </a>
            </li>
            <li className="footer__contact-details-item">
              <CustomIcon>
                <BiLogoGithub />
              </CustomIcon>
              <a href="https://github.com/ManuelARD13" target="_blank">
                ManuelARD13
              </a>
            </li>
          </ul>
          <div className="footer__contact-footer">
            <CustomIcon>
              <FaMapLocationDot />
            </CustomIcon>
            <p>
              {lenguage === "en" &&
                "Autonomous City of Buenos Aires, Argentina. 2024"}
              {lenguage === "es" && "Ciudad Autónoma de Buenos Aires, Argentina. 2024"}
            </p>
          </div>
        </div>
        <div className="footer__copyright">
          <div className="footer__copyright-container">
            <p>Copyright © 2024. Manuel Rojas</p>
            <div className="footer__copyright-links">
              <a
                href="https://www.freeprivacypolicy.com/live/78160001-6cbb-4963-82db-d7dfa2080341"
                target="_blank"
              >
                {lenguage === "en" && "Privacy Policy"}
                {lenguage === "es" && "Política de Privacidad"}
              </a>
              <a
                href="https://www.freeprivacypolicy.com/live/20508db2-1d13-4760-9855-336763a722d8"
                target="_blank"
              >
                {lenguage === "en" && "Terms of Service"}
                {lenguage === "es" && "Términos de Servicio"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
