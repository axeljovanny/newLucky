import React from "react" // Libreria de React
import { SAbout, SContenedorPrincipal, SFooter, SHeader, SHeader1, SHeader2, SHeader3, SPortafolio, SServicios, STeam } from "../styles/js/mario/mario";


//Pagina principal Mario
const MarioPage = () => {
  return (
    //Aqui se agrega todo lo que va en tu pagina
    <>
      <SContenedorPrincipal>
        <SHeader>
          <SHeader1>
            <SHeader2>

            </SHeader2>

      <SHeader3></SHeader3>
      
          </SHeader1>
        </SHeader>


        <SAbout>
        <h1> ABOUT</h1>
        </SAbout>


        <SPortafolio>
        <h1> PORTAFOLIO </h1>
        </SPortafolio>

        <SServicios>
        <h1> SERVICIO </h1>
       </SServicios>

       <STeam>
        <h1> TEAM  </h1>
       </STeam>

      <SFooter>
        <h1> FOOTER </h1>
      </SFooter>

      </SContenedorPrincipal>
    </>
  )
};

export default MarioPage

