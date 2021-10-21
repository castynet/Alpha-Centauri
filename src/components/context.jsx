import React, { useContext } from "react";

const Context = React.createContext();

export function useApi() {
  return useContext(Context);
}

export const ContextProvider = ({ children }) => {
  const hello = "hello";

  return <Context.Provider value={{ hello }}>{children}</Context.Provider>;
};
