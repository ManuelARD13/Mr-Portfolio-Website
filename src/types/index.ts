export interface Certification {
  title: string;
  img: string;
  description: string;
  detailsList: string[];
  link: string;
  logo: string;
  date: string;
  institution: string;
  techIcon: JSX.Element;
}

export interface FeaturedCertification extends Omit<Certification, "detailsList" | "logo" | "date" | "institution"> {}

export interface Project {
  title: string;
  mobileTitle: string;
  subtext: string;
  technologies: JSX.Element[];
  description: JSX.Element;
  githubLink: string;
  liveLink: string;
  pageLink: string;
  mainFeatures: string[];
  image: string;
  logo: string;
  mainColor: string;
  secondaryColor?: string;
}