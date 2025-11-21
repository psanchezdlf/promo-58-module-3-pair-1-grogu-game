/* eslint-disable no-unused-vars */
import { useState } from "react";
import "../styles/App.scss";
import Header from "./Header";
import Board from "./Board";
import Grogu from "./Grogu";

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

const [groguPosition, setGroguPosition] = useState("0")

const [numberOfCookies, setNumberOfCookies] = useState(3)
const [numberOfEggs, setNumberOfEggs] = useState(3)
const [numberOfFrogs, setNumberOfFrogs] = useState(3)

let [randomNumber, setRandomNumber] = useState(0)

// eslint-disable-next-line no-unused-vars
const [gameStatus, setGameStatus] = useState("")

function rollDice() {
  randomNumber = Math.floor(Math.random() * 4) + 1;
  return randomNumber;
}

/*if (randomNumber === 4){
  setGroguPosition("1")

} else {
  setNumberOfCookies(numberOfCookies-1)
  setNumberOfEggs(numberOfEggs-1)
  setNumberOfFrogs(numberOfFrogs-1)

}*/



  return (
    <div>
       <Header/>
    <main className="page">
      <Board /*groguPosition={groguPosition}*/ />
    

      

      <section>
        <button className="dice">Lanzar Dado</button>
        <div className="game-status">En curso</div>
      </section>

      <section className="goods-container">
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
      </section>
      <section>
        <button className="restart-button">Reiniciar Juego</button>
      </section>
    </main>
    </div>
  );
}

export default App;
