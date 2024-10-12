import { RxHamburgerMenu } from "react-icons/rx";

function MobileNav() {
  /*TODO: Finish Mobile Nav: 
              - Open and Close Funcionality
              - Open Menu Behavior
              - Animations
  */
  return (
    <div className="main-nav__mobile">
      <div
        className="main-nav__mobile-logo"
        onClick={() => (location.href = "/")}
      >
        <div className="main-nav__mobile-logo-img-container">
          <p className="main-nav__mobile-logo-img">Mr.</p>
        </div>
        <p className="main-nav__mobile-logo-subtext">
          Front-end <br /> Engineer
        </p>
      </div>
      <RxHamburgerMenu />
    </div>
  );
}

export default MobileNav;
