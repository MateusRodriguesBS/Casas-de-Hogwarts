import { logEvent } from '../amplitude'; 

export default function CharacterCard({ character }) {
  
 const houseColors = {
  Gryffindor: 'red',
  Slytherin: 'green',
  Hufflepuff: 'yellow',
  Ravenclaw: 'blue',
};

const borderColor = houseColors[character.house] || 'black';

  const handleCharacterClick = () => {
    
    logEvent('Character Click', { name: character.name, house: character.house });
  };

  const handleFavoriteCharacterClick = () => {
    logEvent('Button Favorite Character Click', { fromHouse: character.house, character: character.name });
        alert(`Você marcou ${character.name} como favorito!`);

  };


  return (
    <div
      style={{
        border: `2px solid ${borderColor}`,
        borderRadius: '8px',
        padding: '12px',
        margin: '8px',
        width: '200px',
        textAlign: 'center',
        cursor: 'pointer',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        transition: 'transform 0.2s',
      }}
    >
      <img
        src={character.image || null}
        alt={character.name}
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '6px',
          marginBottom: '8px',
        }}
        onClick={handleCharacterClick}
      />
      <h3 style={{ margin: '4px 0' }}>{character.name}</h3>
      <p style={{ margin: '2px 0' }}>Espécie: {character.species}</p>
      <p style={{ margin: '2px 0' }}>Casa: {character.house}</p>

      <button
        onClick={handleFavoriteCharacterClick}
        style={{
          marginTop: '10px',
          padding: '6px 12px',
          borderRadius: '4px',
          border: 'none',
          backgroundColor: '#000000',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        Favorito
      </button>
    </div>
  );
}
