import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";

import Inicio from "./pages/Inicio";
import Sumadora from "./pages/Sumadora";
import NumeroLetras from "./pages/NumeroLetras";
import TablaMultiplicar from "./pages/TablaMultiplicar";
import Experiencia from "./pages/Experiencia";

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sumadora" element={<Sumadora />} />
        <Route path="/numero-letras" element={<NumeroLetras />} />
        <Route path="/tabla-multiplicar" element={<TablaMultiplicar />} />
        <Route path="/experiencia" element={<Experiencia />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;