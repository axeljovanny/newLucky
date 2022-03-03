import React, { useState } from "react";
import { Link, useI18next, Trans } from 'gatsby-plugin-react-i18next';
import { colors } from "../utils/const";
import { StyledLang, StyledIcons, StyledNavigator, Item, LangStyled, LinkStyled, NavIcon, Line, Overlay, OverlayMenu, LangStyledWeb } from "../styles/js/navigator";
import FacebookIcon from '../images/icons/facebook.svg'
import InstagramIcon from '../images/icons/instagram.svg'
import BehanceIcon from '../images/icons/behance.svg'
import FiveerIcon from '../images/icons/fiverr.svg'
import TiktokIcon from '../images/icons/tik-tok.svg'

const Navigator = ({ siteTitle }) => {
    const { languages, changeLanguage } = useI18next();

    const [toggle, toggleNav] = useState(false);
    return (
        <>
            <StyledNavigator >
                <StyledIcons>
                    <img src={FacebookIcon} alt='Facebook Social Media Icon' fill='#875645' />
                    <img src={InstagramIcon} alt='Instagram Social Media Icon' />
                    <img src={BehanceIcon} alt='Behance Social Media Icon' />
                    <img src={FiveerIcon} alt='Fiverr Social Media Icon' />
                    <img src={TiktokIcon} alt='Tiktok Social Media Icon' />

                </StyledIcons>
                <StyledLang>
                    <LangStyledWeb>
                        {languages.map((lng) => (<Item>
                            <LinkStyled >
                                <Link key={lng}
                                    to="/"
                                    onClick={() => {
                                        changeLanguage(lng);
                                    }}
                                    style={{
                                        color: colors.white,
                                        textDecoration: 'none',
                                        fontSize: '1.5em',
                                    }}>
                                    <Trans>{lng}</Trans>
                                </Link>
                            </LinkStyled>
                        </Item>))}
                    </LangStyledWeb>

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
                        <Link key="home" rel="preload" to="/">
                            <LinkStyled >
                                <Trans>HOME</Trans>
                            </LinkStyled>
                        </Link>
                    </Item>
                    <Item onClick={() => toggleNav(!toggle)}>
                        <Link key="about" rel="preload" to="/about">
                            <LinkStyled >
                                <Trans>ABOUT</Trans>
                            </LinkStyled>
                        </Link>
                    </Item>
                    <Item onClick={() => toggleNav(!toggle)}>
                        <Link key="work" rel="preload" to="/work">
                            <LinkStyled >
                                <Trans>WORK</Trans>
                            </LinkStyled>
                        </Link>
                    </Item>

                    <LangStyled>
                        {languages.map((lng) => (<Item>
                            <LinkStyled >
                                <Link key={lng}
                                    to="/"
                                    onClick={() => {
                                        changeLanguage(lng);
                                    }}
                                    style={{
                                        color: colors.redAccent,
                                        textDecoration: 'none',
                                        padding: '0 .5em',
                                        fontSize: '.9em',
                                    }}>
                                    <Trans>{lng}</Trans>
                                </Link>
                            </LinkStyled>

                        </Item>))}
                    </LangStyled>
                </OverlayMenu>
            </Overlay>


        </>
    );


};

export default Navigator;