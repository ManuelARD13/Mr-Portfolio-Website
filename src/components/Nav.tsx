import LenguageSwitch from "@common/LenguageSwitch/LenguageSwitch";
import Menu from "@common/Menu/Menu";
import ThemeSwitch from "@common/ThemeSwitch/ThemeSwitch";
import { useAppContext } from "@context/AppContext";
import { Link } from "react-router-dom";

const menuTags = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Projects",
    link: "/#projects",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Academics",
    link: "/academics",
  },
];

const etiquetasDelMenu = [
  {
    title: "Inicio",
    link: "/",
  },
  {
    title: "Sobre Mi",
    link: "/#about",
  },
  {
    title: "Proyectos",
    link: "/#projects",
  },
  {
    title: "Contacto",
    link: "/#contact",
  },
  {
    title: "Educación",
    link: "/academics",
  },
];

function Nav() {
  const { lenguage } = useAppContext();
  return (
    <div className="nav-container">
      <nav className="main-nav">
        <Link to={"/"} className="main-nav__logo">
          <div className="main-nav__logo-img-container">
            <p className="main-nav__logo-img">Mr.</p>
          </div>
          <p className="main-nav__logo-subtext">
            Front-end <br /> Engineer
          </p>
        </Link>
        <Menu
          className="main-nav__menu"
          items={lenguage === "es" ? etiquetasDelMenu : menuTags}
        />
        <LenguageSwitch />
        <ThemeSwitch />
      </nav>
    </div>
  );
}

export default Nav;
