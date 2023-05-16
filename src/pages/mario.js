import React from "react" // Libreria de React
import { ContenedorCentro, ContenedorDerecha, ContenedorPrincipal } from "../styles/js/mario/mario";


//Pagina principal Mario
const MarioPage = () => {
    return (
    //Aqui se agrega todo lo que va en tu pagina
      <>
      <ContenedorPrincipal>
       <ContenedorCentro>
        <ContenedorDerecha>
        <h1>HOLA</h1>
        </ContenedorDerecha>
       </ContenedorCentro>
      </ContenedorPrincipal>
      </>
    )
  };

  export default MarioPage
