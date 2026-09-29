import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <h2>Mi Aplicación</h2>

      <Link to="/">Inicio</Link>
      <Link to="/sumadora">Sumadora</Link>
      <Link to="/numero-letras">Número a Letras</Link>
      <Link to="/tabla-multiplicar">Tabla de Multiplicar</Link>
      <Link to="/experiencia">Mi Experiencia</Link>
    </nav>
  );
}

export default Menu;