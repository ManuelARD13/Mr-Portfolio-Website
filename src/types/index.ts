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
  image: string; // images
  logo: string;
  mainColor: string;
  secondaryColor?: string;
  /*
  longDescription1: JSX.Element;
  longDescription2: JSX.Element;
  images: string[]
  secondaryFeatures: string[];
  video: string;
  videoDescription: JSX.Element;
  */
}