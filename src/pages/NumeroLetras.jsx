import { useState } from "react";

function NumeroLetras() {
  const [numero, setNumero] = useState("");
  const [resultado, setResultado] = useState("");

  const unidades = [
    "",
    "uno",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "siete",
    "ocho",
    "nueve",
  ];

  const especiales = [
    "diez",
    "once",
    "doce",
    "trece",
    "catorce",
    "quince",
    "dieciséis",
    "diecisiete",
    "dieciocho",
    "diecinueve",
  ];

  const decenas = [
    "",
    "",
    "veinte",
    "treinta",
    "cuarenta",
    "cincuenta",
    "sesenta",
    "setenta",
    "ochenta",
    "noventa",
  ];

  const convertirMenor100 = (num) => {
    if (num < 10) {
      return unidades[num];
    }

    if (num < 20) {
      return especiales[num - 10];
    }

    if (num < 30) {
      if (num === 20) return "veinte";
      return "veinti" + unidades[num - 20];
    }

    const decena = Math.floor(num / 10);
    const unidad = num % 10;

    if (unidad === 0) {
      return decenas[decena];
    }

    return decenas[decena] + " y " + unidades[unidad];
  };

  const convertirMenor1000 = (num) => {
    if (num < 100) {
      return convertirMenor100(num);
    }

    if (num === 100) {
      return "cien";
    }

    const centenas = Math.floor(num / 100);
    const resto = num % 100;

    const nombresCentenas = [
      "",
      "ciento",
      "doscientos",
      "trescientos",
      "cuatrocientos",
      "quinientos",
      "seiscientos",
      "setecientos",
      "ochocientos",
      "novecientos",
    ];

    if (resto === 0) {
      return nombresCentenas[centenas];
    }

    return (
      nombresCentenas[centenas] + " " + convertirMenor100(resto)
    );
  };

  const convertirNumero = () => {
    const valor = Number(numero);

    if (!Number.isInteger(valor) || valor < 1 || valor > 1000) {
      setResultado("Ingrese un número entero entre 1 y 1000.");
      return;
    }

    if (valor === 1000) {
      setResultado("mil");
      return;
    }

    setResultado(convertirMenor1000(valor));
  };

  return (
    <div className="numero-letras">
      <h1>Número a Letras</h1>

      <p>Ingrese un número entre 1 y 1000</p>

      <input
        type="number"
        min="1"
        max="1000"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        placeholder="Ejemplo: 125"
      />

      <button onClick={convertirNumero}>
        Convertir
      </button>

      {resultado && (
        <h2>
          Resultado: {resultado.toUpperCase()}
        </h2>
      )}
    </div>
  );
}

export default NumeroLetras;