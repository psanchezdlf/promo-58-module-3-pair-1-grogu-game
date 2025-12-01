function Dice ({rollDice}) {
    const handleClick = () =>{
        rollDice ()
    }

    return (<div>

        <button onClick = {handleClick} className="dice">Lanzar Dado</button>
        </div>
    )
}
export default Dice;