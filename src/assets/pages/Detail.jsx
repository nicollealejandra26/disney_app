import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../../api/disneyApi";

function Detail() {
  const { id } = useParams();
  const [personaje, setPersonaje] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacterById(id);
      setPersonaje(data);
    };
    fetchData();
  }, [id]);

  if (!personaje) return <p>Cargando personaje...</p>;

  return (
    <div className="detalle">
      <h2>{personaje.name}</h2>
      <img src={personaje.imageUrl} alt={personaje.name} />
      <p>Películas: {personaje.films?.join(", ") || "N/A"}</p>
    </div>
  );
}

export default Detail;
