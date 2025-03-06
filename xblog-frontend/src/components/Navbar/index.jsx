import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/img/logo.svg'; 






const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken');

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div>
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="w-10 h-10 mr-2  " />
          <span className="text-lg font-bold">XBLOG CONNECTION</span>
        </Link>
      </div>
      <div className="flex gap-4">
        <Link to="/" className="hover:underline">Inicio</Link>
        <Link to="/match" className="hover:underline">Match</Link>
        {token ? (
          <button onClick={handleLogout} className="hover:underline">
            Sair
          </button>
        ) : (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/register" className="hover:underline">Cadastro</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
