
import React, { useState } from 'react';
import Panel from './Panel';
import Celda from './Celda';
import '../App.css';

const WINNERS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const Tablero = () => {
  const [mapa, setMapa] = useState(Array(9).fill(0));
  const [turno, setTurno] = useState(1);
  const [gameover, setGameover] = useState(false);
  const [ganador, setGanador] = useState(0);

  const handleClick = (index) => {
    if (mapa[index] !== 0 || gameover) return;

    const nuevoMapa = mapa.slice();
    nuevoMapa[index] = turno;
    setMapa(nuevoMapa);

    const resultado = verificarGanador(nuevoMapa);
    if (resultado !== 0) {
      setGanador(resultado);
      setGameover(true);
    } else if (nuevoMapa.every(celda => celda !== 0)) {
      setGameover(true);
    } else {
      setTurno(turno === 1 ? 2 : 1);
    }
  };

  const verificarGanador = (mapa) => {
    for (const [a, b, c] of WINNERS) {
      if (mapa[a] !== 0 && mapa[a] === mapa[b] && mapa[a] === mapa[c]) {
        return mapa[a];
      }
    }
    return 0;
  };

  const getMessage = () => {
    if (ganador !== 0) return `¡JUGADOR ${ganador} HA GANADO!`;
    if (gameover) return '¡EMPATE!';
    return `TURNO DEL JUGADOR ${turno}`;
  };

  return (
    <div className="tablero">
      <Panel message={getMessage()} />
      <div className="grid">
        {mapa.map((value, index) => (
          <Celda key={index} value={value} onClick={() => handleClick(index)} />
        ))}
      </div>
    </div>
  );
};

export default Tablero;
