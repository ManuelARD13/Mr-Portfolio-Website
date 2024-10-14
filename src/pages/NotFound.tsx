import { useAppContext } from "@context/AppContext";
import { Link } from "react-router-dom";

function NotFound() {
  const { lenguage } = useAppContext();
  return (
    <section className="not-found">
      <div className="not-found__icon">404</div>
      <div className="not-found__title">
        <h1>{lenguage === "es" ? "¡Para que te has perdido!" : "Looks like you got lost!"}</h1>
      </div>
      <div className="not-found__sub-text">
        <p>{lenguage === "es" ? "No encontramos lo que estabas buscando" : "We couldn't find what you were looking for"}</p>
      </div>
      <div className="not-found__btn">
        <Link to={"/"}>
          <button>{lenguage === "es" ? "Volver al inicio" : "Back to Home"}</button>
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
