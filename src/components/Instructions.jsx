function Instructions() {
  return (
    <section className="instructions">
      <h2 className="instructions__title">Cómo jugar</h2>

      <p>
        Introduce tu nombre en la sección de opciones. El juego lo usará para 
        registrar que eres tú quien vigila a Grogu… aunque ya 
        sabemos que Grogu y las normas mantienen una relación tensa.
      </p>

      <p>
        Cada vez que pulses el botón de “Tirar dado”, Grogu decidirá su destino:  
        puede avanzar, puede comerse algo del cargamento o puede que no pase nada. 
        
      </p>

      <h3 className="instructions__subtitle">Resultados posibles del dado</h3>

      <ul className="instructions__list">
        <li className="instructions__li"><strong>1:</strong> Se come una <strong>galleta</strong> (si quedan).</li>
        <li><strong>2:</strong> Se come un <strong>huevo</strong>.</li>
        <li><strong>3:</strong> Se come una <strong>rana</strong>.</li>
        <li><strong>4:</strong> Avanza una casilla.</li>
      </ul>

      <h3 className="instructions__subtitle">Cómo ganar</h3>
      <p>
        Si Grogu avanza hasta la casilla final del tablero, logras completar la misión 
        y Mando podrá respirar tranquilo durante unos segundos. Victoria para ti.
      </p>

      <h3 className="instructions__subtitle">Cómo perder</h3>
      <p>
        Si Grogu se zampa todas las galletas, huevos y ranas antes de llegar al final,  
        la misión fracasa: Grogu se ha merendado el cargamento entero.
      </p>
    </section>
  );
}

export default Instructions;