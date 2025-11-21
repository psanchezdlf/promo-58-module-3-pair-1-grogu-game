import Grogu from "./Grogu";

function Board /*({groguPosition})*/() {
    return (
           <section className="board">
           
        <div className="cell">{/*{(groguPosition === "0") ?*/ <Grogu/> /*: null }*/}</div>   
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
      </section>
    );
}
export default Board;