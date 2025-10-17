function FilterBar({ busqueda, setBusqueda }) {
  return (
    <input
      type="text"
      placeholder="Buscar personaje..."
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
      className="filtro"
    />
  );
}

export default FilterBar;
