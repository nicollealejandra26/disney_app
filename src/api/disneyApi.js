const BASE_URL = "https://api.disneyapi.dev/character";

export const getAllCharacters = async () => {
  try {
    const res = await fetch(`${BASE_URL}?pageSize=50`);
    if (!res.ok) throw new Error("Error al obtener personajes");
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getCharacterById = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) throw new Error("Error al obtener personaje");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};