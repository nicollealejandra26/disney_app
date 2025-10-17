function CharacterCard({ character, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={character.imageUrl} alt={character.name} />
      <p>{character.name}</p>
    </div>
  );
}

export default CharacterCard;
