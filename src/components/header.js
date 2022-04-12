import PropTypes from "prop-types"
import React from "react"
import { StyledHeader, StyledLogo, StyledTextHeader, StyledButtonRight, StyledVideo, StyledVideoMovil } from '../styles/js/header'
import { LogoPrincipal } from "./imagesComponets"
import { Trans } from 'gatsby-plugin-react-i18next';
import { StyledLine } from "../styles/js/navigator";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Fondo from "../images/fondo.mp4"
import FondoWebM from "../images/fondo.webm"
import FondoMovil from "../images/fondoMovil.mp4"
import Poster from "../images/fondo.png"
import PosterMovil from "../images/fondoMovil.png"

import '../styles/css/svg.css'
import { colors } from "../utils/const";
import { Trebol } from '../images/icons/icons.js'


const Header = ({ siteTitle }) => {

    if (siteTitle === 'Home') {
        return (
            <>
                <StyledLine white></StyledLine>
                <StyledVideo web>
                    <video width="100%" autoplay="autoplay" muted loop poster={Poster}>
                        <source src={FondoWebM} type="video/webm" />
                    </video>
                </StyledVideo>

                <StyledVideoMovil movil>
                    <video width="100%" height="10%" autoplay="autoplay" muted loop poster={PosterMovil}>
                        <source src={FondoMovil} type="video/mp4" />
                    </video>
                </StyledVideoMovil>
                <StyledHeader>

                    <StyledLogo>
                        <LogoPrincipal></LogoPrincipal>
                    </StyledLogo>
                    <StyledLogo movil>
                        <Trebol fill={colors.softWhite}></Trebol>
                    </StyledLogo>
                    <StyledButtonRight>
                        <AniLink cover to="work" bg="#00161D" direction="left">
                            <Trans>WORK</Trans><span></span>
                        </AniLink>
                    </StyledButtonRight>
                    <StyledTextHeader>
                        <h5><Trans>WELCOME</Trans></h5>
                        <h4><Trans>OUR</Trans></h4>
                        <h3><Trans>POUND</Trans></h3>
                    </StyledTextHeader>
                </StyledHeader>

            </>
        )
    }

}


Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
