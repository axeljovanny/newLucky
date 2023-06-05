import React from "react" // Libreria de React
import { SAbout, SInicioYCervicios, SContenedorPrincipal, SContenido, SFooter, SHeader, SIdioma, SLogo, SNav, SPortafolio, SServicios, STeam, STextoInicio, STextoServiciosHome, SAnimacionHomeIzq, SHeaderIzquierda, SHeaderDerecha, SRedes, SAnimacionHomeDer, SAnimacionCentral, SAnimacionTextoInicio, SNavButton } from "../styles/js/mario/mario";
import { IFacebook, IFondoHeader, ILogoTrebol, IStickerBorrego, IStickerCorazon, IStickerLap, IconoMenu, Instagram, IWhatsApp, IGrafiiti } from "../components/imagesComponets";
import { StaticImage } from "gatsby-plugin-image";




//Pagina principal Mario
const MarioPage = () => {
  return (
    //Aqui se agrega todo lo que va en tu pagina
    <>


      <SContenedorPrincipal>
        <SHeader>
          <IFondoHeader />
          <SNav>
            <SNavButton>
              <IconoMenu />
            </SNavButton>
            <SLogo>
              <ILogoTrebol />
            </SLogo>

            <SIdioma>
              <a> ESP</a>
              <p> | </p>
              <a> ENG</a>
            </SIdioma>
          </SNav>

          <SContenido>
            <SHeaderIzquierda>
              <SAnimacionHomeIzq>
                <IStickerBorrego />
              </SAnimacionHomeIzq>
              <SRedes>
                <IFacebook />
                <IWhatsApp />
               <Instagram />
              </SRedes>
            </SHeaderIzquierda>
            <SInicioYCervicios>
              <STextoInicio>
                <h1>  LA CREATIVIDAD ES UN REFLEJO DE NUESTRA </h1>
                <SAnimacionCentral>
                  < IStickerLap />
                </SAnimacionCentral>
                <SAnimacionTextoInicio>
                  <IGrafiiti/>
                </SAnimacionTextoInicio>
              </STextoInicio>

              <STextoServiciosHome>
                <p>BRANDING/ PRODUCCION/ DESARROLLO WEB</p>
              </STextoServiciosHome>
            </SInicioYCervicios>
            <SHeaderDerecha>
              <SAnimacionHomeDer>
                <IStickerCorazon />
              </SAnimacionHomeDer>
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

