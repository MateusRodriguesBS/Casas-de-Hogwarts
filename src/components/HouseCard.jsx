export default function HouseCard({ houseName, color, onClick }) {
  const handleClick = () => {
    onClick();
  };

  return (
    <div
      onClick={handleClick}
      style={{
        border: `2px solid ${color}`,
        borderRadius: '8px',
        padding: '20px',
        margin: '10px',
        cursor: 'pointer',
        textAlign: 'center',
        fontWeight: 'bold',
        width: '150px',
      }}
    >
      {houseName}
    </div>
  );
}
