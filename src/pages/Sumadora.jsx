import { useState } from "react";

function Sumadora() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState(null);

  const sumar = () => {
    const suma = Number(numero1) + Number(numero2);
    setResultado(suma);
  };

  return (
    <div className="calculadora">
      <h1>Sumadora</h1>

      <input
        type="number"
        placeholder="Primer número"
        value={numero1}
        onChange={(e) => setNumero1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Segundo número"
        value={numero2}
        onChange={(e) => setNumero2(e.target.value)}
      />

      <button onClick={sumar}>Sumar</button>

      {resultado !== null && (
        <h2>Resultado: {resultado}</h2>
      )}
    </div>
  );
}

export default Sumadora;