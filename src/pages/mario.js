import React from "react" // Libreria de React
import { SAbout, SBaner, SBoton, SContenedorPrincipal, SContenido, SFooter, SHeader,SNav, SPortafolio, SRedes, SServicios, STeam } from "../styles/js/mario/mario";


//Pagina principal Mario
const MarioPage = () => {
  return (
    //Aqui se agrega todo lo que va en tu pagina
    <>
      <SContenedorPrincipal>
        <SHeader>

          <SNav>

          <h3> logo</h3>
          
          
          
        
          
          <SBoton>
            <h3> BOTON </h3>
          </SBoton>
          </SNav>

          <SContenido>
          <SRedes>
            <h3> REDES</h3>
          </SRedes>
          <SBaner>
            <h3> BANER  </h3>
          </SBaner>
          </SContenido>


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

