export default async function handler(req, res) {
  const { houseId } = req.query;
  try {
    const response = await fetch(`https://potterhead-api.vercel.app/api/houses/${houseId}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: `Erro ao buscar detalhes da casa ${houseId}` });
  }
}
