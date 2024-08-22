/* components */
import VideoBackground from "../common/VideoBackground/VideoBackground";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";
import Footer from "../components/Footer";


function Main({ children }: React.PropsWithChildren) {

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
      {detectDevice() === "desktop" ? <Nav /> : <MobileNav />}
      <VideoBackground />
      {children}
      <Footer />
    </>
  );
}

export default Main;
