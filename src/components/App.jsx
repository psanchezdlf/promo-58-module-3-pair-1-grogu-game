/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "../styles/App.scss";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Routes } from "react-router";
import Instructions from "./Instructions";
import Game from "./Game";
import Options from "./Options";

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
    // genera entre 1 y 4
    const diceNumber = Math.floor(Math.random() * 4) + 1;
    setRandomNumber(diceNumber);

    if (diceNumber === 4) {
      setGroguPosition(prev => prev + 1);
      setGameStatus("Grogu ha avanzado una casilla");
      return;
    }

    if (diceNumber === 1 && numberOfCookies > 0) {
      setNumberOfCookies(prev => prev - 1);
      setGameStatus("Grogu se ha comido una galleta");
      return;
    }
    if (diceNumber === 2 && numberOfEggs > 0) {
      setNumberOfEggs(prev => prev - 1);
      setGameStatus("Grogu se ha comido un huevo");
      return;
    }
    if (diceNumber === 3 && numberOfFrogs > 0) {
      setNumberOfFrogs(prev => prev - 1);
      setGameStatus("Grogu se ha comido una rana");
      return;
    }

    // Si cae algo pero la mercancía correspondiente ya es 0:
    setGameStatus("No ocurrió nada (mercancía agotada para esa tirada)");
  }

    useEffect(() => {
    const ranOut = numberOfCookies === 0 && numberOfEggs === 0 && numberOfFrogs === 0;
    const reachedEnd = groguPosition >= 6;

    if (reachedEnd) {
      setGameStatus("Ganaste, Mando completa la misión");
      return;
    }
    if (ranOut) {
      setGameStatus("¡¡Grogu se ha comido el cargamento!! Has perdido");
      return;
    }
    // si no es fin, si estaba en "Fin del juego" o mensajes anteriores, lo dejamos en "En curso" o lo mantenemos
    if (gameStatus === "Ganaste, Mando completa la misión" || gameStatus === "¡¡Grogu se ha comido el cargamento!! Has perdido") {
      // no tocamos (evitamos volver a "En curso")
      return;
    }
    // cuando se vuelve a jugar, mantenemos "En curso" por defecto
    if (gameStatus === "En curso" || gameStatus === "No ocurrió nada (mercancía agotada para esa tirada)" ) {
      // nada
    }
  }, [groguPosition, numberOfCookies, numberOfEggs, numberOfFrogs]);
  

  function resetGame() {
    setGroguPosition(0);
    setNumberOfCookies(3);
    setNumberOfEggs(3);
    setNumberOfFrogs(3);
    setGameStatus("En curso");
  }



  return (
    <div>
      <Header />
      <main className="page">
        <Routes>
          <Route path="/game" element={<Game groguPosition={groguPosition} rollDice={rollDice} gameStatus={gameStatus} numberOfCookies={numberOfCookies} numberOfEggs={numberOfEggs} numberOfFrogs={numberOfFrogs} resetGame={resetGame}/>} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/options" element={<Options />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
