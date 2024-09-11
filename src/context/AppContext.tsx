/* eslint-disable react-refresh/only-export-components */
/* React */
import { Certification, Project } from "@models/index";
import React, { useContext } from "react";
/* Data */
import { certifications, projects } from "@data/mainData";

interface ContextValue {
  certifications: Certification[];
  projects: Project[];
}

const AppCTX = React.createContext({} as ContextValue);

const useAppContext = () => {
  return useContext(AppCTX);
};

function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <AppCTX.Provider value={{ certifications, projects }}>
      {children}
    </AppCTX.Provider>
  );
}

export { AppProvider, useAppContext };
