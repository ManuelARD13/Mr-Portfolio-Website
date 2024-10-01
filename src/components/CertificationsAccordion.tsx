/* React */
import { useEffect, useState } from "react";
/* Components */
import Accordion from "@common/Accordion/Accordion";
/* Hooks */
import { useAppContext } from "@context/AppContext";
/* Type Casting Functions */
import { filterPropertiesOfObjsInArray } from "@models/functions";

interface CertificationItem {
  title: string;
  img: string;
  content: JSX.Element;
}

function CertificationsAccordion() {
  const { certifications } = useAppContext();

  const [search, setSearch] = useState<string>("");
  const [formattedCertifications, setFormattedCertifications] = useState<
    CertificationItem[]
  >([] as CertificationItem[]);
  const [filteredProjects, setFilteredProjects] = useState<CertificationItem[]>(
    formattedCertifications
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const formattedCertifications = filterPropertiesOfObjsInArray(
      certifications,
      "title",
      "img",
      "description",
      "detailsList",
      "link"
    ).map(
      (certification) =>
        ({
          title: certification.title,
          img: certification.img,
          content: (
            <>
              <img src={certification.img} alt={certification.title} />
              <p className="divider"></p>
              <p>{certification.description}</p>
              <ul>
                {certification.detailsList.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <a href={certification.link} target="_blank"><button>Go to course content</button></a>
            </>
          ),
        } as CertificationItem)
    );

    setFormattedCertifications(formattedCertifications);
  }, [certifications]);

  useEffect(() => {
    setFilteredProjects(
      formattedCertifications.filter((certification) =>
        certification.title.toLowerCase().includes(search)
      )
    );
  }, [search, formattedCertifications]);

  return (
    <section className="certifications-accordion">
      <h2>All Certificactions</h2>
      <div className="certifications-accordion__search">
        <input
          type="text"
          className="certifications-accordion__search-input glass-card box-shadow"
          onChange={handleSearch}
          value={search}
          placeholder="Search"
        />
      </div>
      <Accordion items={filteredProjects} className="glass-card box-shadow" />
    </section>
  );
}

export default CertificationsAccordion;
