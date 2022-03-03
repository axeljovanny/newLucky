import PropTypes from "prop-types"
import React from "react"
import { Link } from 'gatsby'
import { StyledHeader, StyledLogo, StyledTextHeader, StyledButtonRight } from '../styles/js/header'
import { LogoPrincipal } from "./imagesComponets"
import { Trans } from 'gatsby-plugin-react-i18next';
import { StyledLine } from "../styles/js/navigator";






const Header = ({ siteTitle }) => {

    if (siteTitle === 'Home') {
        return (
            <>
                <StyledLine white></StyledLine>
                <StyledHeader>
                    <StyledLogo>
                        <LogoPrincipal />
                    </StyledLogo>
                    <StyledButtonRight>
                        <Link key="scroll" to="#"><Trans>WORK</Trans><span></span></Link>
                    </StyledButtonRight>
                    <StyledTextHeader>
                        <h2><Trans>WELCOME</Trans></h2>
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
