import React from "react" // Libreria de React
import { SAbout, SInicioYCervicios, SContenedorPrincipal, SContenido, SFooter, SHeader, SIdioma, SLogo, SNav, SPortafolio, SServicios, STeam, STextoInicio, STextoServiciosHome, SAnimacionHomeIzq, SHeaderIzquierda, SHeaderDerecha, SRedes, SAnimacionHomeDer, SAnimacionCentral, SAnimacionTextoInicio} from "../styles/js/mario/mario";


//Pagina principal Mario
const MarioPage = () => {
  return (
    //Aqui se agrega todo lo que va en tu pagina
    <>
      <SContenedorPrincipal>
        <SHeader>

          <SNav>
            <SLogo>
              <p> LOGO</p>
            </SLogo>






            <SIdioma>
              <a> ESP</a>
              <a> ENG</a>
            </SIdioma>
          </SNav>

          <SContenido>
            <SHeaderIzquierda>

              <SAnimacionHomeIzq></SAnimacionHomeIzq>

              <SRedes>
            
               <a> FB </a>
               <a> WSP </a>
               <a> IG </a>


              </SRedes>

            </SHeaderIzquierda>


            <SInicioYCervicios>
              <STextoInicio> 
                <p>  LA CREATIVIDAD ES UN REFLEJO DE NUESTRA </p>
                <SAnimacionCentral> </SAnimacionCentral>
                <SAnimacionTextoInicio> </SAnimacionTextoInicio>
              </STextoInicio>

              <STextoServiciosHome> 
             <p>BRANDING/ PRODUCCION/ DESARROLLO WEB</p> 
              </STextoServiciosHome>


            </SInicioYCervicios>
            <SHeaderDerecha>
            <SAnimacionHomeDer></SAnimacionHomeDer>
            </SHeaderDerecha>
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

