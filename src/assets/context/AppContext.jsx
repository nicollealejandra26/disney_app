import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);
  const [filtroCategoria, setFiltroCategoria] = useState('all');

  const agregarFavorito = (personaje) => {
    if (!favoritos.find(f => f._id === personaje._id)) {
      setFavoritos([...favoritos, personaje]);
    }
  };

  const eliminarFavorito = (id) => {
    setFavoritos(favoritos.filter(f => f._id !== id));
  };

  return (
    <AppContext.Provider value={{ 
      favoritos, 
      agregarFavorito, 
      eliminarFavorito,
      filtroCategoria,
      setFiltroCategoria 
    }}>
      {children}
    </AppContext.Provider>
  );
};
