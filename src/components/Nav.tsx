import LenguageSwitch from "@common/LenguageSwitch/LenguageSwitch";
import Menu from "@common/Menu/Menu";
import ThemeSwitch from "@common/ThemeSwitch/ThemeSwitch";

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

function Nav() {
  return (
    <div className="nav-container">
      <nav className="main-nav">
        <div className="main-nav__logo" onClick={() => (location.href = "/")}>
          <div className="main-nav__logo-img-container">
            <p className="main-nav__logo-img">Mr.</p>
          </div>
          <p className="main-nav__logo-subtext">Front-end <br /> Engineer</p>
        </div>
        <Menu className="main-nav__menu" items={menuTags} />
        <LenguageSwitch />
        <ThemeSwitch />
      </nav>
    </div>
  );
}

export default Nav;
