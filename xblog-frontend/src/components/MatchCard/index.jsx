import React from 'react';

const MatchCard = ({ id, name, cidade, estado, lancamentos, faturamento, instagram, whatsapp, tipo, userId, onDelete, onEdit }) => {
  const cardStyle = tipo === 'lançador'
    ? 'bg-[#e8f7d0] border-[#c4cf00] text-gray-800'
    : 'bg-[#d5f3d0] border-[#459d33] text-gray-800';

  const titleStyle = tipo === 'lançador'
    ? 'text-[#c4cf00]'
    : 'text-[#459d33]';

  return (
    <div className={`border p-4 rounded shadow-md relative ${cardStyle}`}>

        {onDelete && (
          <button
            onClick={() => onDelete(id, userId)} 
            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
          >
            Excluir
          </button>
        )}
        {onEdit && (
          <button
            onClick={() => onEdit(id)} 
            className="absolute top-8 right-2 text-blue-500 hover:text-blue-700"
          >
            Editar
          </button>
      )}

      <p className="mb-2"><span className={`font-semibold ${titleStyle}`}>Nome:</span> {name}</p>
      <p className="mb-2"><span className="font-semibold">Cidade:</span> {cidade}</p>
      <p className="mb-2"><span className="font-semibold">Estado:</span> {estado}</p>
      <p className="mb-2"><span className="font-semibold">Lançamentos:</span> {lancamentos}</p>
      <p className="mb-2"><span className="font-semibold">Faturamento:</span> {faturamento}</p>
      <p className="mb-2"><span className="font-semibold">Instagram:</span> {instagram}</p>
      <p className="mb-2"><span className="font-semibold">WhatsApp:</span> {whatsapp}</p>
      <p className="mb-2"><span className="font-semibold">Tipo:</span> {tipo}</p>
    </div>
  );
};

export default MatchCard;
