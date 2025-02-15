import { useNavigate } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import Logo from "../../assets/images/logo.svg"; // Certifique-se de que o caminho está correto

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-green-600 p-1 flex items-center justify-between">
      {/* Lado esquerdo: Logo e Nome do Blog */}
      <div className="flex items-center space-x-4">
        <img src={Logo} alt="Logo" className="w-10 h-10" />
        <h1 className="text-3xl font-bold text-white">MATCH DOS LANÇAMENTOS</h1>
      </div>

      
    </header>
  );
}
