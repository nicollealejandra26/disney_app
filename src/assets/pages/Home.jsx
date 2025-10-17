import { useEffect, useState } from "react";
import { getAllCharacters } from "../../api/disneyApi";
import { useNavigate } from "react-router-dom";

function Home() {
  const [personajes, setPersonajes] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllCharacters();
      setPersonajes(data);
    };
    fetchData();
  }, []);

  const filtrados = personajes.filter((p) =>
    p.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Personajes de Disney</h1>

      <input
        type="text"
        placeholder="Buscar personaje..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="filtro"
      />

      <div className="grid">
        {filtrados.map((p) => (
          <div
            key={p._id}
            className="card"
            onClick={() => navigate(`/detail/${p._id}`)}
          >
            <img src={p.imageUrl} alt={p.name} />
            <p>{p.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
