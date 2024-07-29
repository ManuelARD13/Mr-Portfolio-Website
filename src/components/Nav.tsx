import LenguageSwitch from "../common/LenguageSwitch/LenguageSwitch";
import Menu from "../common/Menu/Menu";
import ThemeSwitch from "../common/ThemeSwitch/ThemeSwitch";

function Nav() {
  return (
    <div className="nav-container">
      <nav className="main-nav">
        <div className="main-nav__logo">
          <div className="main-nav__logo-img-container">
            <p className="main-nav__logo-img">Mr.</p>
          </div>
          <p className="main-nav__logo-subtext">Front-end <br /> Engineer</p>
        </div>
        <Menu className="main-nav__menu" />
        <LenguageSwitch />
        <ThemeSwitch />
      </nav>
    </div>
  );
}

export default Nav;
