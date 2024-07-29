
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import About from "../components/About";
import Hero from "../components/Hero";
import Nav from "../components/Nav";

import VideoBackground from "../common/VideoBackground/VideoBackground";
import BacktoTopBtn from "../common/BackToTopBtn/BacktoTopBtn";

function Home() {
  return (
    <div>
      {/* Miscelaneous */}
      <BacktoTopBtn anchorId="#top" />
      <VideoBackground />
      {/* Main Estructure */}
        <Nav />
        <Hero />
        <About />{/*Section #1*/}
        <Projects />{/*Section #2*/}
        <Contact />{/*Section #3*/}
        <Footer />

    </div>
  );
}

export default Home;
