import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { MainContent } from "./components/Maincontent/MainContent";
import LoginPage from './pages/LoginPage'; // Página de Login (Crie esse arquivo)


function App() {
  return (
    <Router> 
      <div className="bg-white text-[#2C3E50] min-h-screen">
        <Header />
        <Navbar ></Navbar>
        <Routes>  {/* Definindo as rotas */}
          <Route path="/" element={<MainContent />} /> {/* Página principal */}
          <Route path="/login" element={<LoginPage />} /> {/* Página de Login */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
