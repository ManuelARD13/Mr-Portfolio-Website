import englishIcon from "@assets/english-icon.png";
import spanishIcon from "@assets/spanish-icon-2.png";
import { useAppContext } from "@context/AppContext";

//TODO: create a switch for spanish and english logic

function LenguageSwitch() {
  const { lenguage, changeLenguage } = useAppContext();
  return (
    <div className="main-nav__languages-toggler">
      <img src={englishIcon} alt="english" className={lenguage === "en" ? "" : "inactive"} onClick={() => changeLenguage("en")} />
      <img src={spanishIcon} alt="spanish" className={lenguage === "es" ? "" : "inactive"} onClick={() => changeLenguage("es")} />
    </div>
  );
}

export default LenguageSwitch;
