import CustomIcon from "@common/CustomIcon";
import Menu from "@common/Menu/Menu";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import {
  BiLogoGithub,
  BiLogoGmail,
  BiLogoLinkedinSquare,
  BiLogoTelegram,
  BiLogoWhatsapp,
} from "react-icons/bi";

const menuTags = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Academics",
    link: "/academics",
  },
  {
    title: "Live Projects",
    link: "/projects",
  },
];

const socialMediaIcons: { icon: JSX.Element; link: string }[] = [
  {
    icon: <BiLogoGithub />,
    link: "https://github.com/manuelard13",
  },
  {
    icon: <BiLogoLinkedinSquare />,
    link: "https://www.linkedin.com/in/manuelard13/",
  },
  {
    icon: <BiLogoTelegram />,
    link: "https://t.me/ManuelARD13",
  },
  {
    icon: <BiLogoGmail />,
    link: "mailto:duranalejandro661@gmail",
  },
  {
    icon: <BiLogoWhatsapp />,
    link: "https://api.whatsapp.com/send/?phone=5491124090119&text&type=phone_number&app_absent=0",
  },
];

const menuItemsVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const animationState = {
  open: {
    clipPath: `circle(2200px at 90vw 1vw)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(0px at 90vw 1vw)",
    transition: {
      delay: 0.15,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function MobileMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="mobile-menu"
    >
      <motion.div className="mobile-menu__background" variants={animationState}>
        <Menu
          className="mobile-menu__menu"
          items={menuTags}
          toggleSettings={menuItemsVariants}
          callback = {() => setIsOpen(false)}
        />
        <div className="mobile-menu__social-media-icons">
          {socialMediaIcons.map(({ icon, link }) => (
            <motion.a href={link} target="_blank" key={link} variants={menuItemsVariants}>
              <CustomIcon>{icon}</CustomIcon>
            </motion.a>
          ))}
        </div>
      </motion.div>
      <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu__icon">
        <svg width="23" height="23" viewBox="0 0 23 23">
          <motion.path
            fill="transparent"
            strokeWidth="3"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <motion.path
            fill="transparent"
            strokeWidth="3"
            strokeLinecap="round"
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <motion.path
            fill="transparent"
            strokeWidth="3"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </button>
    </motion.nav>
  );
}

export default MobileMenu;
