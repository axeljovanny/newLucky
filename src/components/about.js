import React from "react"
import { StyledAbout, AboutTittle, AboutText, AboutImg1, AboutImgDiv2, AboutImgDiv3 } from "../styles/js/about"
import { Trans } from 'gatsby-plugin-react-i18next';
import { ImgFogonMovil, ImgAntonio, ImgAntonioMovil, ImgFogon, ImgJesus } from "./imagesComponets";
import { StyledLine } from "../styles/js/navigator";
import { Line } from "../images/icons/icons";
import { colors } from "../utils/const";
import '../styles/css/svg.css'




const About = ({ siteTitle }) => {
    return (
        <>
            <StyledLine white></StyledLine>
            <StyledAbout>
                <Line fill={colors.softWhite} className="line" />
                <Line fill={colors.softWhite} className="line" />
                <Line fill={colors.softWhite} className="line" />
                <Line fill={colors.softWhite} className="line" />
                <Line fill={colors.softWhite} className="line" />
                <AboutTittle>
                    <h2><Trans>ABOUT_TITTLE</Trans></h2>
                    <h3><Trans>ABOUT_TITTLE2</Trans></h3>
                </AboutTittle>
                <AboutText><h4><Trans>ABOUT_TEXT</Trans></h4></AboutText>
                <AboutImgDiv2 web><ImgAntonio></ImgAntonio> </AboutImgDiv2>
                <AboutImgDiv2 movil><ImgAntonioMovil></ImgAntonioMovil> </AboutImgDiv2>
                <AboutImgDiv3> <ImgFogon></ImgFogon></AboutImgDiv3>
                <AboutImg1 web> <ImgJesus></ImgJesus></AboutImg1>
                <AboutImg1 movil> <ImgFogonMovil></ImgFogonMovil></AboutImg1>
            </StyledAbout>
        </>
    )

}

export default About