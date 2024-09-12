/* components */
import VideoBackground from "@common/VideoBackground/VideoBackground";
import Nav from "@components/Nav";
import MobileNav from "@components/MobileNav";
import Footer from "@components/Footer";


function Main({ children, videoBackground }: { children: React.ReactNode, videoBackground?: boolean }) {

  return (
    <>
      <Nav />
      <MobileNav />
      { videoBackground && <VideoBackground />}
      {children}
      <Footer />
    </>
  );
}

export default Main;
