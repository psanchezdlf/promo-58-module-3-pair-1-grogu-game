/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "../styles/App.scss";
import Header from "./Header";
import Board from "./Board";
import Dice from "./Dice";

/* EVENTO CLICK BOTÓN: lanzar dado */
//1. Generar numero aleatorio entre 1 y 4
//2. Condicional
//- Si el dado es 4, Grogu avanza una posición => Cambiar la variable estado de la posición
//- Si el dado es 1, 2 o 3, Grogu descarga una mercancia => cambiar estado de la mercancia
/* EVENTO CLICK BOTÓN: reiniciar juego */
//Restablecer el estado original de la posición y de la mercancia.
/* DATOS */
//-Posición => la posición tendrá el valor inicial de 0
//-nº de galletas 3
//-nº de nuevos 3
//-nº de ranas 3

function App() {
  const [groguPosition, setGroguPosition] = useState(0);

  const [numberOfCookies, setNumberOfCookies] = useState(3);
  const [numberOfEggs, setNumberOfEggs] = useState(3);
  const [numberOfFrogs, setNumberOfFrogs] = useState(3);

  let [randomNumber, setRandomNumber] = useState(0);

  // eslint-disable-next-line no-unused-vars
  const [gameStatus, setGameStatus] = useState("En curso");

  function rollDice() {

    const diceNumber = Math.floor(Math.random() * 4) + 1;
    setRandomNumber(diceNumber);

    if (diceNumber === 4) {
      setGroguPosition(groguPosition +1);
      setGameStatus("Grogu ha avanzado una casilla");
    } else if (diceNumber === 1 && numberOfCookies > 0){

      setNumberOfCookies(numberOfCookies - 1),
        setGameStatus("Grogu se ha comido una galleta");
    } else if (diceNumber === 2 && numberOfEggs > 0) {
      setNumberOfEggs(numberOfEggs - 1),
        setGameStatus("Grogu se ha comido un huevo");
    } else if (diceNumber === 3 && numberOfFrogs > 0) {
      setNumberOfFrogs(numberOfFrogs - 1),
        setGameStatus("Grogu se ha comido una rana");
    } else if (numberOfCookies === 0 && numberOfEggs === 0 && numberOfFrogs === 0){
      setGameStatus("Ya no queda mercancía");
    }
  }

  useEffect(() => {
    const isGameOver =
      groguPosition === 6 ||
      (numberOfCookies === 0 && numberOfEggs === 0 && numberOfFrogs === 0);

    // solo actualizamos si cambia el texto — así evitamos renders encadenados
    if (isGameOver && gameStatus !== "Fin del juego") {
      setGameStatus("Fin del juego");
    }

    if (isGameOver && groguPosition === 6) {
       setGameStatus("Ganaste, Mando completa la misión" );
    }
     if (isGameOver && numberOfCookies === 0 && numberOfEggs === 0 && numberOfFrogs === 0) {
       setGameStatus("¡¡Grogu se ha comido el cargamento!! Has perdido");
    }

  }, [groguPosition, numberOfCookies, numberOfEggs, numberOfFrogs, gameStatus]);
// ...existing code...

  



  return (
    <div>
      <Header />
      <main className="page">
        <Board groguPosition={groguPosition} />

        <section>
          <Dice rollDice={rollDice} />
          <div className="game-status">{gameStatus}</div>
        </section>

        <section className="goods-container">
          {Array.from({ length: numberOfCookies }).map((_, i) => (
            <div className="goods-item" key={i}>
              🍪
            </div>
          ))}
        </section>
        <section className="goods-container">
          {Array.from({ length: numberOfEggs }).map((_, i) => (
            <div className="goods-item" key={i}>
              🥚
            </div>
          ))}
        </section>
        <section className="goods-container">
          {Array.from({ length: numberOfFrogs }).map((_, i) => (
            <div className="goods-item" key={i}>
              🐸
            </div>
          ))}
        </section>
        <section>
          <button className="restart-button">Reiniciar Juego</button>
        </section>
      </main>
    </div>
  );
}

export default App;
