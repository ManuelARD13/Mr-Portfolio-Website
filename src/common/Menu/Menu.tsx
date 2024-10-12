import { useAppContext } from "@context/AppContext";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";

interface menuTag {
  title: string;
  link: string;
}

// const variants = {
//   open: {
//     transition: { staggerChildren: 0.07, delayChildren: 0.2 }
//   },
//   closed: {
//     transition: { staggerChildren: 0.05, staggerDirection: -1 }
//   }
// };

function Menu({
  className,
  items,
  toggleSettings,
  callback
}: {
  className?: string;
  items: menuTag[];
  toggleSettings?: Variants;
  callback?: () => void;
}) {
  return (
    <motion.ul className={className} >
      {items?.map((tag) => (
        <motion.li key={tag.title} className="main-nav__menu-item" variants={toggleSettings}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => callback?.()}
        >
          <Link to={tag.link}>{tag.title}</Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default Menu;
