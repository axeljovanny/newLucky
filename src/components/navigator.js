import React, { useState } from "react";
import { Link, useI18next, Trans } from 'gatsby-plugin-react-i18next';
import { colors } from "../utils/const";
import { StyledLang, StyledIcons, StyledNavigator, Item, LangStyled, NavIcon, Line, Overlay, OverlayMenu, LangButtons } from "../styles/js/navigator";
import { BehanceIcon, FacebookIcon, FiverrIcon, InstagramIcon, LinkedinIcon } from '../images/icons/icons.js'
import '../styles/css/svg.css'
import AniLink from "gatsby-plugin-transition-link/AniLink"





const Navigator = ({ siteTitle }) => {
    const { languages, changeLanguage } = useI18next();


    const [toggle, toggleNav] = useState(false);
    return (
        <>
            <StyledNavigator >
                <StyledIcons>
                    <FacebookIcon fill={colors.softWhite} className="svgAbout" />
                    <InstagramIcon fill={colors.softWhite} className="svgAbout" />
                    <BehanceIcon fill={colors.softWhite} className="svgAbout" />
                    <LinkedinIcon fill={colors.softWhite} className="svgAbout" />
                    <FiverrIcon fill={colors.softWhite} className="svgAbout" />
                </StyledIcons>
                <StyledLang>
                    <LangButtons>
                        {languages.map((lng) => (<Item>
                            <Link key={lng}
                                to="/"
                                onClick={() => {
                                    changeLanguage(lng);
                                }}
                                style={{
                                    textDecoration: 'none',
                                }}>
                                <Trans>{lng}</Trans>
                            </Link>
                        </Item>))}
                    </LangButtons>
                </StyledLang>

                <NavIcon onClick={() => toggleNav(!toggle)}>
                    <Line open={toggle} />
                    <Line open={toggle} />
                    <Line open={toggle} />
                </NavIcon>

            </StyledNavigator>

            <Overlay open={toggle}>
                <OverlayMenu open={toggle}>
                    <Item onClick={() => toggleNav(!toggle)}>

                        <AniLink cover to={'./'} bg="#00161D" direction="left">
                            <Trans>HOME</Trans><span></span>
                        </AniLink>
                    </Item>
                    <Item onClick={() => toggleNav(!toggle)}>
                        <AniLink cover to="#/about" bg="#00161D" direction="left">
                            <Trans>ABOUT</Trans><span></span>
                        </AniLink>
                    </Item>
                    <Item onClick={() => toggleNav(!toggle)}>
                        <AniLink cover to="work" bg="#00161D" direction="left">
                            <Trans>WORK</Trans><span></span>
                        </AniLink>
                    </Item>
                </OverlayMenu>

                <LangStyled open={toggle}>
                    {languages.map((lng) => (
                        <Item>
                            <Link key={lng}
                                to="/"
                                onClick={() => {
                                    changeLanguage(lng);
                                }}
                                style={{
                                    textDecoration: 'none',
                                    padding: '0 1em',
                                }}>
                                <Trans>{lng}</Trans>
                            </Link>
                        </Item>))}
                </LangStyled>


                <StyledIcons open={toggle}>
                    <FacebookIcon fill={colors.softWhite} className="svgAbout" />
                    <BehanceIcon fill={colors.softWhite} className="svgAbout" />
                    <InstagramIcon fill={colors.softWhite} className="svgAbout" />
                    <LinkedinIcon fill={colors.softWhite} className="svgAbout" />
                    <FiverrIcon fill={colors.softWhite} className="svgAbout" />
                </StyledIcons>
            </Overlay>


        </>
    );


};

export default Navigator;