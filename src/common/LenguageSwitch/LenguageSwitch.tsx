import englishIcon from "../../assets/english-icon.png";
import spanishIcon from "../../assets/spanish-icon.png";

//TODO: create a switch for spanish and english logic

function LenguageSwitch() {
  return (
    <div className="main-nav__languages-toggler">
      <img src={englishIcon} alt="english" />
      <img src={spanishIcon} alt="spanish" className="inactive" />
    </div>
  );
}

export default LenguageSwitch;
