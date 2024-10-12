import { useAppContext } from "@context/AppContext";
import { Link } from "react-router-dom";


interface menuTag {
  title: string;
  link: string;
  type: string;
}

const menuTags: menuTag[] = [
  {
    title: "Home",
    link: "/",
    type: "anchor",
  },
  {
    title: "About",
    link: "/#about",
    type: "anchor",
  },
  {
    title: "Projects",
    link: "/#projects",
    type: "anchor",
  },
  {
    title: "Contact",
    link: "/#contact",
    type: "anchor",
  },
  {
    title: "Academics",
    link: "/academics",
    type: "link",
  },
];

const etiquetasMenu: menuTag[] = [
  {
    title: "Inicio",
    link: "/",
    type: "anchor",
  },
  {
    title: "Sobre Mi",
    link: "/#about",
    type: "anchor",
  },
  {
    title: "Proyectos",
    link: "/#projects",
    type: "anchor",
  },
  {
    title: "Contacto",
    link: "/#contact",
    type: "anchor",
  },
  {
    title: "Educación",
    link: "/academics",
    type: "link",
  },
];

function Menu({className}: {className?: string}) {
  const { lenguage } = useAppContext();
  const applyLenguage = (lenguage: string) => {
    if (lenguage === "es") {
      return etiquetasMenu;
    }
    if (lenguage === "en") {
      return menuTags;
    }
    return menuTags;
  }
  return (
    <ul className={className}>
      {(applyLenguage(lenguage)).map((tag) => (
        <li key={tag.title} className="main-nav__menu-item">
          {tag.type === "link" ? (
            <Link to={tag.link}>{tag.title}</Link>
          ) : (
            <a href={tag.link}>{tag.title}</a>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Menu;
