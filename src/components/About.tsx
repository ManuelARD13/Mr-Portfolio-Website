import profilePic from "@assets/about-image.png";
import mobilePic from "@assets/about-image.png";
import { aboutInfo } from "@data/mainData";
function About() {
  return (
    <section id="about">
      <div className="about">
        <div className="about__column-1">
          <div className="about__background"></div>
          <img src={profilePic} alt="about" className="about__img" />
        </div>
        <div className="about__column-2">
          <div className="about__img-container--mobile">
            <img src={mobilePic} alt="about" className="about__img--mobile" />
          </div>
          <h3 className="about__title">Front-end Engineer</h3>
          <div className="about__description">
            {aboutInfo.aboutInfo}
          </div>
          <div className="about__btn">
            <a href="#projects">
              <button>Watch my work!</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
