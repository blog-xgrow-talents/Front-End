import React, { useState, useEffect, useCallback } from 'react';
import MatchForm from '../../components/MatchForm';
import MatchCard from '../../components/MatchCard';
import { useInView } from 'react-intersection-observer';
import { jwtDecode } from 'jwt-decode';

const MatchPage = () => {
  const token = localStorage.getItem('authToken');
  const [isCreatingCard, setIsCreatingCard] = useState(false);
  const [isEditingCard, setIsEditingCard] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const { ref, inView } = useInView();
  const [errorMessage, setErrorMessage] = useState('');
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        if (decodedToken?.role) {
          setUserRole(decodedToken.role);
        }
      } catch (error) {
        console.error('Erro ao decodificar token:', error);
      }
    }
  }, [token]);

  const handleCreateCardClick = () => {
    if (!token) {
      window.alert('Faça login para executar essa ação');
    } else {
      setIsCreatingCard(true);
    }
  };

  const handleEditCardClick = (id) => {
    const cardToEdit = cards.find((card) => card._id === id);
    setCurrentCard(cardToEdit);
    setIsEditingCard(true);
  };

  const handleCreateCard = async (newCardData) => {
    try {
      if (!token) {
        throw new Error('Token não encontrado.');
      }

      const decodedToken = jwtDecode(token);
      const userId = decodedToken?.id;

      if (!userId) {
        throw new Error('ID do usuário não encontrado no token.');
      }

      const response = await fetch(`${import.meta.env.VITE_API_XBLOG}/api/cards`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ ...newCardData, userId }), 
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erro ao criar card');
      }

      const createdCard = await response.json();
      setCards([...cards, createdCard]);
      setIsCreatingCard(false);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Preencha todos os campos obrigatórios.');
    }
  };

  const handleEditCard = async (id, updatedCardData) => {
    try {
      if (!token) {
        throw new Error('Token não encontrado.');
      }

      const decodedToken = jwtDecode(token);
      const userId = decodedToken?.id;

      if (!userId) {
        throw new Error('ID do usuário não encontrado no token.');
      }

      const response = await fetch(`${import.meta.env.VITE_API_XBLOG}/api/cards/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(updatedCardData), 
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erro ao editar card');
      }

      const updatedCard = await response.json();
      setCards(cards.map((card) => (card._id === id ? updatedCard : card)));
      setIsEditingCard(false);
      setCurrentCard(null);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Erro ao editar card.');
    }
  };

  const fetchMoreCards = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_XBLOG}/api/cards`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erro ao buscar cards');
      }

      const fetchedCards = await response.json();
      setCards(fetchedCards);
      setLoading(false);
      setHasMore(false);
    } catch (error) {
      setLoading(false);
    }
  }, [loading, hasMore]);

  useEffect(() => {
    fetchMoreCards();
  }, [fetchMoreCards]);

  const handleDeleteCard = async (id, cardUserId) => {
    try {
      if (!token) {
        throw new Error('Token não encontrado.');
      }

      const decodedToken = jwtDecode(token);
      const userId = decodedToken?.id;

      if (!userId) {
        throw new Error('ID do usuário não encontrado no token.');
      }

      if (userId !== cardUserId && userRole !== 'admin') {
        throw new Error('Você não tem permissão para excluir este card.');
      }

      const response = await fetch(`${import.meta.env.VITE_API_XBLOG}/api/cards/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erro ao excluir card');
      }

      setCards(cards.filter((card) => card.id !== id));
    } catch (error) {
      setErrorMessage('Erro ao excluir card.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      {token && (
        <button
          onClick={handleCreateCardClick}
          className="bg-blue-500 text-white p-2 rounded mb-4"
        >
          Criar Card
        </button>
      )}

      {isCreatingCard && <MatchForm onSubmit={handleCreateCard} />}
      {isEditingCard && <MatchForm onSubmit={(data) => handleEditCard(currentCard._id, data)} initialData={currentCard} />}

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <MatchCard
            key={card._id}
            {...card}
            onDelete={token && (card.userId === jwtDecode(token)?.id || userRole === 'admin') ? () => handleDeleteCard(card._id, card.userId) : null}
            onEdit={token && (card.userId === jwtDecode(token)?.id || userRole === 'admin') ? () => handleEditCardClick(card._id) : null}
          />
        ))}
        {loading && <p>Carregando mais cards...</p>}
        {hasMore && <div ref={ref} />}
      </div>
    </div>
  );
};

export default MatchPage;
