import Header from "./Header";
import Contador from "./Contador";
import Accionador from "./Accionador";
import { useEffect, useState } from "react";

const MainContainer = () => {
  // POR CONVENCIÓN VAN PRIMERO LOS ESTADOS

  const [contador, setContador] = useState(0);
  const [contadorJugador1, setContadorJugador1] = useState(0);
  const [contadorJugador2, setContadorJugador2] = useState(0);

  const [isNegative, setIsNegative] = useState(false);

  useEffect(() => {
    contador < 0 ? setIsNegative(true) : setIsNegative(false)
  }, [contador]);

  // DE SEGUNDAS SE ASIGNAN LOS EFECTOS

  // TERCERO VA FUNCIONES Y EL RESTO

  const agregar = "+";
  const disminuir = "-";

  const btnAgregar = "btnAgregar";
  const btnDisminuir = "btnDisminuir";

  const jugador1 = "Edwar";
  const jugador2 = "Alexa";

  // let contador = 0;

  function sumar() {
    setContador(contador + 1);
    setContadorJugador1(contadorJugador1 + 1);
  }

  function restar() {
    setContador(contador - 1);
    setContadorJugador2(contadorJugador2 + 1);
  }

  return (
    <div className="mainContainer">
      <Header />
      {isNegative ? (
        <p>Vas perdiendo</p>
      ) : (
        <Contador valorContador={contador} />
      )}
      <section className="seccionAccionadores">
        <Accionador
          signo={agregar}
          classBtn={btnAgregar}
          jugador={jugador1}
          funcionBtn={sumar}
          contadorJugador={contadorJugador1}
        />
        <Accionador
          signo={disminuir}
          classBtn={btnDisminuir}
          jugador={jugador2}
          funcionBtn={restar}
          contadorJugador={contadorJugador2}
        />
      </section>
    </div>
  );
};

export default MainContainer;
