import React from "react"
import { StyledAbout, AboutTittle, AboutText, AboutImg1, AboutImgDiv2, AboutImgDiv3 } from "../styles/js/about"
import { Trans } from 'gatsby-plugin-react-i18next';
import { AboutImg, AboutImg2, AboutImg3 } from "./imagesComponets";
import { StyledLine } from "../styles/js/navigator";



const About = ({ siteTitle }) => {
    return (
        <>
            <StyledLine white></StyledLine>
            <StyledAbout>
                <AboutTittle>
                    <h2><Trans>ABOUT_TITTLE</Trans></h2>
                    <h3><Trans>ABOUT_TITTLE2</Trans></h3>
                </AboutTittle>
                <AboutImg1> <AboutImg2></AboutImg2></AboutImg1>
                <AboutText><h4><Trans>ABOUT_TEXT</Trans></h4></AboutText>
                <AboutImgDiv2> <AboutImg3></AboutImg3></AboutImgDiv2>
                <AboutImgDiv3> <AboutImg></AboutImg></AboutImgDiv3>
            </StyledAbout>
        </>
    )

}

export default About