import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

function MobileNav() {
  return (
    <div className="main-nav__mobile">
      <Link to={"/"}>
        <div className="main-nav__mobile-logo">
          <div className="main-nav__mobile-logo-img-container">
            <p className="main-nav__mobile-logo-img">Mr.</p>
          </div>
          <p className="main-nav__mobile-logo-subtext">
            Front-end <br /> Engineer
          </p>
        </div>
      </Link>
      <MobileMenu />
    </div>
  );
}

export default MobileNav;
