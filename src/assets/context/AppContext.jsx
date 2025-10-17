import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  return (
    <AppContext.Provider value={{ favoritos, setFavoritos }}>
      {children}
    </AppContext.Provider>
  );
};
