import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonVariants from '../Button/Button';

export function Navbar() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <header className="flex justify-center items-center p-4 text-white">
      <div className="space-x-4 flex"> 
        <ButtonVariants
          onClick={() => handleNavigate('/')}
        >
          Início
        </ButtonVariants>
        <ButtonVariants
          onClick={() => handleNavigate('/login')}
        >
          Login
        </ButtonVariants>
        <ButtonVariants
          onClick={() => handleNavigate('/cadastro')}
        >
          Cadastrar
        </ButtonVariants>
        <ButtonVariants
          onClick={() => handleNavigate('/match')}
        >
          Match
        </ButtonVariants>
      </div>
    </header>
  );
}
