import Board from "./Board";
import Dice from "./Dice";

function Game({groguPosition, rollDice, gameStatus, numberOfCookies, numberOfEggs, numberOfFrogs,resetGame,name}) {
    return (<>
        <Board groguPosition={groguPosition} />
        <Dice rollDice={rollDice} />
         <section>
          
          <div className="game-status">
            {name? `${name}, ${gameStatus}` : gameStatus}</div>
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
          <button onClick={resetGame}className="restart-button">Reiniciar Juego</button>
        </section>
    </>
    );
}

export default Game;