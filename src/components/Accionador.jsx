const Accionador = ({signo, classBtn, jugador, funcionBtn, contadorJugador}) => {
  return (
    <section className="contenedorAccionador">
        <button onClick={funcionBtn} className={classBtn}>{signo}</button>
        <p> {contadorJugador} </p>
        <p>{jugador}</p>
    </section>
  )
}

export default Accionador