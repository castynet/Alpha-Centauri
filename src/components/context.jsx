import React, { useContext, useState } from "react";

const Context = React.createContext();

export function useApp() {
  return useContext(Context);
}

export const ContextProvider = ({ children }) => {
  const [view, setView] = useState("Courses");

  return (
    <Context.Provider value={{ view, setView }}>{children}</Context.Provider>
  );
};
