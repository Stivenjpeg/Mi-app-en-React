import { useState } from "react";

function TablaMultiplicar() {
  const [numero, setNumero] = useState("");
  const [tabla, setTabla] = useState([]);

  const generarTabla = () => {
    const valor = Number(numero);

    if (!numero || !Number.isInteger(valor)) {
      setTabla([]);
      return;
    }

    const resultados = [];

    for (let i = 1; i <= 13; i++) {
      resultados.push({
        multiplicador: i,
        resultado: valor * i,
      });
    }

    setTabla(resultados);
  };

  return (
    <div className="tabla-multiplicar">
      <h1>Tabla de Multiplicar</h1>

      <p>Ingrese un número para generar su tabla hasta el 13.</p>

      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        placeholder="Ejemplo: 7"
      />

      <button onClick={generarTabla}>
        Generar Tabla
      </button>

      {tabla.length > 0 && (
        <div className="resultado-tabla">
          <h2>Tabla del {numero}</h2>

          {tabla.map((fila) => (
            <p key={fila.multiplicador}>
              {numero} × {fila.multiplicador} = {fila.resultado}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default TablaMultiplicar;