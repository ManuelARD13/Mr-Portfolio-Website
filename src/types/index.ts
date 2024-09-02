export interface Certification {
  title: string;
  img: string;
  description: string;
  detailsList: string[];
  link: string;
  techIcon: JSX.Element;
}

export interface FeaturedCertification extends Omit<Certification, "detailsList"> {}

export type Slide = {
  img: string;
  title: string;
  description: string;
  detailsList: string[];
};
