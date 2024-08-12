import Nav from "../components/Nav";
import certification1 from "../assets/diploma-asincronismo-js.jpg";
import { BiLogoTypescript } from "react-icons/bi";

function Academics() {
  return (
    <>
      <Nav />
      <section className="academics__header">
        <div className="academics__header-left">
          <img src={certification1} alt="" className="academics__featured-certification--1" />
          <img src={certification1} alt="" className="academics__featured-certification--2" />
          <img src={certification1} alt="" className="academic__featured-certification--3" />
        </div>
        <div className="academic__header-right">
          <div className="academics__header-title">
            <h1>Lorem ipsum dolor, sit amet</h1>
            <BiLogoTypescript />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur doloremque vel, natus eum obcaecati ad illo labore quod cum, sed porro laborum deleniti. Eligendi sequi assumenda inventore adipisci pariatur deleniti! Blanditiis obcaecati quidem quaerat beatae praesentium repellendus, corporis molestias iste.</p>
          <button className="academics__header-buttonn">Source</button>
          <div
            className="academics__header-slide-arrow"
          >
            {">"}
          </div>
        </div>
      </section>
      <section className="academics__projects">
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum non aperiam laudantium doloribus nobis labore necessitatibus, sit reprehenderit dolorem sint et, est dolores enim dolore deserunt sequi. Officiis ipsum quis ut esse fugit, laboriosam delectus?</p>
        <button>Explore Live Projects</button>
      </section>
      <section className="academics__certifications">
        <div className="academics__certifications-display">
          <div className="academics__certifications-display-left">
            <img src={certification1} alt="" />
          </div>
          <div className="academic__certifications-display-right">
            <h3>Front-end Development</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, ea. Excepturi esse similique quas ducimus porro cumque ex corporis nostrum. Quos voluptates aut animi, minima optio eos debitis cupiditate possimus.</p>
          </div>
        </div>
        <div className="academics__certifications-selector">
        <div className="academics__certifications-selector-options">
          <img src={certification1} alt="" className="academics__certification--1" />
          <img src={certification1} alt="" className="academic__certification--2" />
          <img src={certification1} alt="" className="academic__certification--3" />
          <img src={certification1} alt="" className="academic__certification--4" />
          <img src={certification1} alt="" className="academic__certification--5" />
          <img src={certification1} alt="" className="academic__certification--6" />
          <img src={certification1} alt="" className="academic__certification--7" />
        </div>
        <div className="academics__certifications-selector-controls">
        <div
            className="academics__certifications-selector-controls-arrow"
          >
            {"<"}
          </div>
          <div className="academics__certifications-selector-controls-markers">
            <div className="academic__certifications-selector-controls-marker"></div>
            <div className="academic__certifications-selector-controls-marker"></div>
            <div className="academic__certifications-selector-controls-marker"></div>
            <div className="academic__certifications-selector-controls-marker"></div>
            <div className="academic__certifications-selector-controls-marker"></div>
            <div className="academic__certifications-selector-controls-marker"></div>
            <div className="academic__certifications-selector-controls-marker"></div>
          </div>
          <div
            className="academics__hcertifications-selector-controls-arrow"
          >
            {">"}
          </div>

        </div>
        </div>
      </section>

    </>
  );
}

export default Academics;