function Experiencia() {
  return (
    <div className="experiencia">
      <h1>Mi Experiencia</h1>

      <p>
        En este video explico mi experiencia desarrollando esta aplicación
        utilizando React.
      </p>

      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/wWS75h6_8jo"
          title="Mi experiencia desarrollando la aplicación"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Experiencia;