function Dice ({rollDice}) {
    const handleClick = () =>{
        rollDice ()
    }

    return (

        <button onClick = {handleClick} className="dice">Lanzar Dado</button>
    )
}
export default Dice;