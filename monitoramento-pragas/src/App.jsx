import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CadastroPage from "./pages/CadastroPage";
import OcorrenciasPage from "./pages/OcorrenciasPage";

function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 bg-green-800 text-white flex gap-4 shadow-md">
        <Link to="/">Cadastro</Link>
        <Link to="/ocorrencias">Ocorrências</Link>
      </nav>
      <Routes>
        <Route path="/" element={<CadastroPage />} />
        <Route path="/ocorrencias" element={<OcorrenciasPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;