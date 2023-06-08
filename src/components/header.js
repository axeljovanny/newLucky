import React from "react";
import {
  SInicioYCervicios,
  SContenido,
  SHeader,
  SIdioma,
  SLogo,
  SNav,
  STextoInicio,
  STextoServiciosHome,
  SAnimacionHomeIzq,
  SHeaderIzquierda,
  SHeaderDerecha,
  SRedes,
  SAnimacionHomeDer,
  SAnimacionCentral,
  SAnimacionTextoInicio,
  SNavButton,
} from "../styles/js/mario/mario";
import {
  IFondoHeader,
  ILogoTrebol,
  IStickerBorrego,
  IStickerCorazon,
  IStickerLap,
  IconoMenu,
  IGrafiiti,
} from "./imagesComponets";
import {
  BehanceIcon,
  FacebookIcon,
  InstagramIcon,
} from "../images/icons/icons";
import { colors } from "../utils/const";
import "../styles/css/svg.css";

const Header = ({ siteTitle }) => {
  return (
    <>
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
            <a> ESP </a>
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
              <BehanceIcon fill={colors.black} className={"svgAbout"} />
              <FacebookIcon fill={colors.black} className={"svgAbout"} />
              <InstagramIcon fill={colors.black} className={"svgAbout"} />
            </SRedes>
          </SHeaderIzquierda>
          <SInicioYCervicios>
            <STextoInicio>
              <h1>
              LA <span>CREATIVIDAD</span>  <span class="Es">ES</span>  <span class="Un"> UN </span> <span>REFLEJO</span> DE <span>NUESTRA</span>{" "}  
              </h1>
              <SAnimacionCentral>
                <IStickerLap />
              </SAnimacionCentral>
              <SAnimacionTextoInicio>
                <IGrafiiti />
              </SAnimacionTextoInicio>
            </STextoInicio>
            <STextoServiciosHome>
              <p>
                BRANDING &nbsp; | &nbsp; PRODUCCION AUDIOVISUAL&nbsp; |&nbsp;
                DESARROLLO WEB
              </p>
            </STextoServiciosHome>
          </SInicioYCervicios>
          <SHeaderDerecha>
            <SAnimacionHomeDer>
              <IStickerCorazon />
            </SAnimacionHomeDer>
          </SHeaderDerecha>
        </SContenido>
      </SHeader>
    </>
  );
};

export default Header;
