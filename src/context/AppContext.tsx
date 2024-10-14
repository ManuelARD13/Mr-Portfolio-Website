/* eslint-disable react-refresh/only-export-components */
/* React */
import { AboutData, Certification, Project } from "@models/index";
import React, { useContext } from "react";
/* Data */
import {
  certificationsData,
  certificaciones,
  projectsData,
  proyectos,
  aboutInfo,
  sobreMiInfo,
  piedepaginaInfo,
  footerInfo,
  listaDeHabilidades,
  skillList,
} from "@data/mainData";

interface ContextValue {
  certifications: Certification[];
  projects: Project[];
  lenguage: keyof typeof Lenguage;
  changeLenguage: (lenguage: keyof typeof Lenguage) => void;
  skills: {title: string; icon: JSX.Element}[];
  aboutData: AboutData;
  footerData: string;
}

enum Lenguage {
  es = "es",
  en = "en",
}

const AppCTX = React.createContext({} as ContextValue);

const useAppContext = () => {
  return useContext(AppCTX);
};

function AppProvider({ children }: { children: React.ReactNode }) {
  const [lenguage, setLenguage] = React.useState<keyof typeof Lenguage>("en");

  const changeLenguage = (lenguage: keyof typeof Lenguage) => {
    setLenguage(lenguage);
  };

  const projects = lenguage === Lenguage.es ? proyectos : projectsData;

  const certifications =
    lenguage === Lenguage.es ? certificaciones : certificationsData;

    const skills = lenguage === Lenguage.es ? listaDeHabilidades : skillList;

  const aboutData = lenguage === Lenguage.es ? sobreMiInfo : aboutInfo;

  const footerData = lenguage === Lenguage.es ? piedepaginaInfo : footerInfo;

  return (
    <AppCTX.Provider
      value={{
        certifications,
        projects,
        lenguage,
        changeLenguage,
        skills,
        aboutData,
        footerData,
      }}
    >
      {children}
    </AppCTX.Provider>
  );
}

export { AppProvider, useAppContext };
