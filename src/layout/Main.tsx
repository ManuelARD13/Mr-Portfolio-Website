/* components */
import VideoBackground from "@common/VideoBackground/VideoBackground";
import Nav from "@components/Nav";
import MobileNav from "@components/MobileNav";
import Footer from "@components/Footer";


function Main({ children }: { children: React.ReactNode }) {

  return (
    <>
      <Nav />
      <MobileNav />
      <VideoBackground />
      {children}
      <Footer />
    </>
  );
}

export default Main;
