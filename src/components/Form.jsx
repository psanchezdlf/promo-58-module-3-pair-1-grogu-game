function Form({name, setName}) {

    function handleChange(ev) {
        setName(ev.target.value);
    }

    function handleSubmit(ev) {
        ev.preventDefault();
    }
  return (
    <form className="form" onSubmit={handleSubmit} >
        <label htmlFor="name">Nombre:</label>
        <input 
        id="name"
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Escribe tu nombre" />
    </form>
    
    
  );
}

export default Form;