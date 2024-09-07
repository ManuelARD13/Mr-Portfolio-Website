import MobileProjects from "@components/MobileProjects";
import { useAppContext } from "@context/AppContext";
import { BiLogoTypescript } from "react-icons/bi";

import video from "@assets/background-waves.webm";

function Project() {
  const { projects } = useAppContext();
  return (
    <>
      <section className="project__header">
        <div className="project__header-title">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi totam
            quis culpa numquam accusamus molestias at fugiat quas obcaecati
            corporis?
          </p>
        </div>
        <div className="project__header-selector">
          <MobileProjects mobileProjects={projects} />
        </div>
      </section>
      <section className="project">
        <div className="project__title">
          <h2>Lorem, ipsum dolor.</h2>
          <BiLogoTypescript />
          <BiLogoTypescript />
          <BiLogoTypescript />
          <BiLogoTypescript />
        </div>
        <div className="project__resume">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut magnam
            nobis, ea non nulla iste blanditiis vero nemo assumenda labore.
            Voluptate sint similique nam autem accusantium distinctio quam
            repudiandae maiores earum dolore blanditiis repellendus, cupiditate,
            molestias eum veniam dolores. Laborum, quas libero? Modi incidunt
            voluptatem quaerat consectetur non culpa laudantium.
          </p>
        </div>
      </section>
      <section className="project__main-content">
        <div className="project__main-content-row">
          <img src={projects[0].image} alt="" />
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam nostrum ipsa at asperiores rem a ea dignissimos quis
              porro cum consequuntur veritatis, nisi, consequatur eius! Eligendi
              facere deserunt amet temporibus provident libero nulla natus,
              culpa recusandae obcaecati ratione officia ab ut neque optio
              explicabo consequuntur quasi debitis! Voluptatem, doloribus
              commodi!
            </p>
          </div>
        </div>
        <div className="project__main-content-row">
          <img src={projects[0].image} alt="" />
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam nostrum ipsa at asperiores rem a ea dignissimos quis
              porro cum consequuntur veritatis, nisi, consequatur eius! Eligendi
              facere deserunt amet temporibus provident libero nulla natus,
              culpa recusandae obcaecati ratione officia ab ut neque optio
              explicabo consequuntur quasi debitis! Voluptatem, doloribus
              commodi!
            </p>
          </div>
        </div>
      </section>
      <section className="project__bullet-points">
        <h3 className="project__bullet-points-title">
          Lorem ipsum dolor sit amet.
        </h3>
        <ul className="project__bullet-points-list">
          <li className="project__bullet-points-list-item">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
            ullam?
          </li>
          <li className="project__bullet-points-list-item">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
            ullam?
          </li>
          <li className="project__bullet-points-list-item">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
            ullam?
          </li>
          <li className="project__bullet-points-list-item">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
            ullam?
          </li>
        </ul>
        <ul className="project__bullet-points-list">
          <li className="project__bullet-points-list-item">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
            ullam?
          </li>
          <li className="project__bullet-points-list-item">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
            ullam?
          </li>
          <li className="project__bullet-points-list-item">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
            ullam?
          </li>
          <li className="project__bullet-points-list-item">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
            ullam?
          </li>
        </ul>
      </section>
      <section className="project__showcase">
        <div className="project__showcase-video">
          <video src={video} controls />
        </div>
        <div className="project__showcase-text">
          <h4>Lorem ipsum dolor sit.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, modi sit facilis delectus odit illum neque nam aliquam
            aspernatur numquam, alias odio consectetur saepe in harum cum ea
            aliquid voluptatum?
          </p>
        </div>
      </section>
    </>
  );
}

export default Project;
