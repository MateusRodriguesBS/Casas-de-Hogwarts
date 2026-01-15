import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getHouseById } from '../api/houses';
import CharacterCard from '../components/CharacterCard';

export default function HouseDetails() {
  const { id } = useParams();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHouse = async () => {
      try {
        const data = await getHouseById(id);
        setCharacters(data);
      } catch (error) {
        console.error('Erro ao buscar personagens da casa:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchHouse();
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (characters.length === 0) return <p>Não há personagens nessa casa.</p>;

  return (
    <div>
      <h1>{id}</h1>
      <div className="characters-grid">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}
