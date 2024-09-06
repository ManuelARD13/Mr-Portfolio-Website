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

function Menu({className}: {className?: string}) {
  return (
    <ul className={className}>
      {menuTags.map((tag) => (
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
