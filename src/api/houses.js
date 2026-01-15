const BASE_URL = import.meta.env.VITE_API_BASE || '/api';

export const getHouses = async () => {
  try {
    const res = await fetch(`${BASE_URL}/houses`);
    if (!res.ok) {
      throw new Error('Erro ao buscar casas');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Erro em getHouses:', error);
    throw error;
  }
};

export const getHouseById = async (houseId) => {
  try {
    const res = await fetch(`${BASE_URL}/houses/${houseId}`);
    if (!res.ok) {
      throw new Error(`Erro ao buscar detalhes da casa ${houseId}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Erro em getHouseById:', error);
    throw error;
  }
};
