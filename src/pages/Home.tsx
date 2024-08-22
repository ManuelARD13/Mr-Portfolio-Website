/*Components*/
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import MobileProjects from "../components/MobileProjects";
import Contact from "../components/Contact";

import BacktoTopBtn from "../common/BackToTopBtn/BacktoTopBtn";

function Home() {

  const detectDevice = (): string => {
    const regex = new RegExp(
      "Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini",
      "i"
    );
    if (regex.test(navigator.userAgent)) {
      return "mobile";
    } else {
      return "desktop";
    }
  };

  return (
    <>
      <BacktoTopBtn anchorId="#top"/>
      {/* <VideoBackground /> */}

      {/* Main Estructure */}

      {/*Section #1*/}
      <Hero />
      <About />
      {/*Section #2*/}
      {detectDevice() === "desktop" ? <Projects /> : <MobileProjects />}
      {/*Section #3*/}
      <Contact />
    </>
  );
}

export default Home;
