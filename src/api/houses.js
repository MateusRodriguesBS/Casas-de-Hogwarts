const BASE_URL = '/api';

export const getHouses = async () => {
  const res = await fetch(`${BASE_URL}/houses`);
  if (!res.ok) throw new Error('Erro ao buscar casas');
  return await res.json();
};

export const getHouseById = async (houseId) => {
  const res = await fetch(`${BASE_URL}/house/${houseId}`);
  if (!res.ok) throw new Error(`Erro ao buscar detalhes da casa ${houseId}`);
  return await res.json();
};
