import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getHouses } from '../api/houses';
import { logPageView, logEvent } from '../amplitude';
import HouseCard from '../components/HouseCard';

const houseColors = {
  Gryffindor: 'red',
  Slytherin: 'green',
  Hufflepuff: 'yellow',
  Ravenclaw: 'blue',
};

export default function Home() {
  const [houses, setHouses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    logPageView('Home');
    getHouses()
      .then(setHouses)
      .catch((err) => console.error('Erro ao buscar casas:', err));
  }, []);

  const handleHouseClick = (houseName) => {
    logEvent('House Click', { house: houseName });
    navigate(`/houses/${houseName}`);
  };

  const handleFavoriteClick = (houseName) => {
    logEvent('Favorite House Click', { house: houseName });
    alert(`Você marcou ${houseName} como favorita!`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Escolha sua casa</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {houses.map((house) => (
          <div key={house} style={{ textAlign: 'center' }}>
            <HouseCard
              houseName={house}
              color={houseColors[house] || 'black'}
              onClick={() => handleHouseClick(house)}
            />
            <button
              onClick={() => handleFavoriteClick(house)}
              style={{
                marginTop: '8px',
                padding: '6px 12px',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: '#000',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              Favorito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
