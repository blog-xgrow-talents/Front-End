import React, { useState, useEffect } from 'react';

const MatchForm = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    name: '',
    cidade: '',
    estado: '',
    lancamentos: '',
    faturamento: '',
    instagram: '',
    whatsapp: '',
    tipo: 'lançador',
    ...initialData,  // Preenche com dados iniciais ao editar
  });

  useEffect(() => {
    if (initialData._id) {  
      setFormData({
        name: initialData.name || '',
        cidade: initialData.cidade || '',
        estado: initialData.estado || '',
        lancamentos: initialData.lancamentos || '',
        faturamento: initialData.faturamento || '',
        instagram: initialData.instagram || '',
        whatsapp: initialData.whatsapp || '',
        tipo: initialData.tipo || 'lançador',
      });
    }
  }, [initialData]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded shadow-md">
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Nome</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Cidade</label>
        <input
          type="text"
          name="cidade"
          value={formData.cidade}
          onChange={handleChange}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Estado</label>
        <input
          type="text"
          name="estado"
          value={formData.estado}
          onChange={handleChange}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Lançamentos</label>
        <input
          type="text"
          name="lancamentos"
          value={formData.lancamentos}
          onChange={handleChange}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Faturamento</label>
        <input
          type="text"
          name="faturamento"
          value={formData.faturamento}
          onChange={handleChange}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Instagram</label>
        <input
          type="text"
          name="instagram"
          value={formData.instagram}
          onChange={handleChange}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">WhatsApp</label>
        <input
          type="text"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Tipo</label>
        <select
          name="tipo"
          value={formData.tipo}
          onChange={handleChange}
          className="mt-1 p-2 border rounded w-full"
        >
          <option value="lançador">Lançador</option>
          <option value="especialista">Especialista</option>
        </select>
      </div>
      <button type="submit" className="bg-[#3490dc] text-white p-2 rounded w-full hover:bg-[#2779bd]">
        {initialData._id ? 'Salvar alterações' : 'Criar'}
      </button>
    </form>
  );
};

export default MatchForm;
