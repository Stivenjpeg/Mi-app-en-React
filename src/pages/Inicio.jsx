import fotoPerfil from "../assets/foto-perfil.jpg";

function Inicio() {
  return (
    <div className="inicio">
      <h1>Bienvenido a mi aplicación</h1>

      <img
        src={fotoPerfil}
        alt="Foto de perfil"
        className="foto-perfil"
      />

      <h2>Keylin Steven Rosario Mordan</h2>

      <p>Desarrollo de Software</p>

      <p>Correo electrónico: 20241613@example.com</p>
    </div>
  );
}

export default Inicio;