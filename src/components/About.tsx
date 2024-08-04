import profilePic from "../assets/profile.png";
import mobilePic from "../assets/profile-mobile.png";

function About() {
  //TODO: Work on a responsive padding and font sizes
  return (
    <section id="about">
      <div className="about">
        <div className="about__column-1">
          <div className="about__background"></div>
          <img src={profilePic} alt="about" className="about__img" />
        </div>
        <div className="about__column-2">
          <div className="about__img-container--mobile"><img src={mobilePic} alt="about" className="about__img--mobile" /></div>
          <h3 className="about__title">Front-end Engineer</h3>
          <div className="about__description">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus fuga fugiat dolorum officia amet fugit commodi, voluptas
              nostrum? Libero cum error perferendis assumenda tempore obcaecati
              pariatur eos quibusdam. Corrupti aliquam similique praesentium?
              Excepturi possimus vel quos quia. Nihil, error! Dignissimos, harum
              magni necessitatibus dicta rem, est molestiae ab recusandae odit
              quod dolorem aut velit?
            </p>
            <br />
            <p>
              {" "}
              Dolore repudiandae tempore soluta tenetur porro, illo dolores
              neque impedit{" "}
            </p>
            <br />
            <p>
              {" "}
              Dllo dolores neque impedit omnis in veritatis animi ad illum alias
              consequuntur numquam sapiente! Dllo dolores neque impedit omnis in veritatis animi ad illum alias
              consequuntur numquam sapiente!
            </p>
          </div>
          <div className="about__btn">
            <button>Lorem Ipsum</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
