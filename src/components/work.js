import React from "react"
import { Trans } from 'gatsby-plugin-react-i18next';
import "../styles/css/cards.css"
import { FooterContact, FooterImage, FooterSocial, FooterText, Social, StyledFooter, Text } from "../styles/js/footer";
import { ImgFooter, ImgFooterMovil } from "./imagesComponets";
import { BehanceIcon, FacebookIcon, FiverrIcon, InstagramIcon, LinkedinIcon } from "../images/icons/icons";
import { colors } from "../utils/const";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { StyledIcons } from "../styles/js/navigator";
import { StyledButtonLeft } from "../styles/js/header";
import { StaticImage } from "gatsby-plugin-image";





const Work = ({ siteTitle }) => {

    return (
        <>
            <div className="header">
                <StyledButtonLeft>
                    <AniLink cover to={'../'} bg="#00161D" direction="right">
                        <Trans>Home</Trans><span></span>
                    </AniLink>
                </StyledButtonLeft>
                <h1>
                    PORTAFOLIO
                </h1>

            </div>
            <ul className="cards">
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.behance.net/gallery/133221947/Jesus-Mejia-Branding" className="card">
                        <StaticImage src="../images/portafolio/jesus.jpg" className="card__image" alt="A dinosaur" placeholder="blurred" formats={['auto', 'webp']} />
                        <div className="card__overlay">
                            <div className="card__header">
                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                <StaticImage src="../images/portafolio/jesus.jpg" className="card__thumb" alt="A dinosaur" placeholder="blurred" formats={['auto', 'webp']} />
                                <div className="card__header-text">

                                    <h3 className="card__title">Jesús Mejía | Branding</h3>
                                    <span className="card__status">2021 - LEÓN</span>
                                </div>
                            </div>
                            <p className="card__description">Jesús Mejía Nutriólogo Clínico Deportivo, is the personal brand of Jesús Mejía it´s a clinical nutritionist and sports nutritionist who resides ...</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.behance.net/gallery/130700059/Social-Media-Jesus-Mejia" className="card">
                        <StaticImage src="../images/portafolio/jesusSM.jpg" className="card__image" alt="A dinosaur" placeholder="blurred" formats={['auto', 'webp']} />
                        <div className="card__overlay">
                            <div className="card__header">
                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                <StaticImage src="../images/portafolio/jesusSM.jpg" className="card__thumb" alt="A dinosaur" placeholder="blurred" formats={['auto', 'webp']} />
                                <div className="card__header-text">
                                    <h3 className="card__title">Social Media | Jesús Mejía</h3>
                                    <span className="card__status">2021 - LEÓN</span>
                                </div>
                            </div>
                            <p className="card__description">Jesús Mejía Nutriólogo Clínico Deportivo, is the personal brand of Jesús Mejía it´s a clinical nutritionist and sports nutritionist who resides ...</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.behance.net/gallery/131548055/El-Fogon" className="card">
                        <StaticImage src="../images/portafolio/fogon.jpg" className="card__image" alt="A dinosaur" placeholder="blurred" formats={['auto', 'webp']} />
                        <div className="card__overlay">
                            <div className="card__header">
                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                <StaticImage src="../images/portafolio/fogon.jpg" className="card__thumb" alt="A dinosaur" placeholder="blurred" formats={['auto', 'webp']} />
                                <div className="card__header-text">
                                    <h3 className="card__title">El Fogón | Branding</h3>
                                    <span className="card__status">2021 - BERWYN, ILL.</span>
                                </div>
                            </div>
                            <p className="card__description">"El Fogón" is a restaurant of Mexican kitchen which uses recipes passed down from generation to generation. and at the same time they have adapted to ...</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.behance.net/gallery/131459655/El-Fogon-Web" className="card">
                        <StaticImage src="../images/portafolio/fogonWeb.jpg" className="card__image" alt="A dinosaur" placeholder="blurred" formats={['auto', 'webp']} />
                        <div className="card__overlay">
                            <div className="card__header">
                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                <StaticImage src="../images/portafolio/fogonWeb.jpg" className="card__thumb" alt="A dinosaur" placeholder="blurred" formats={['auto', 'webp']} />
                                <div className="card__header-text">
                                    <h3 className="card__title">El Fogón | Web</h3>
                                    <span className="card__status">2021 - BERWYN, ILL.</span>
                                </div>
                            </div>
                            <p className="card__description">"El Fogón" is a restaurant of Mexican kitchen which uses recipes passed down from generation to generation. and at the same time they have adapted to ...</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.behance.net/gallery/131375731/El-Fogon-Social-Media" className="card">
                        <StaticImage src="../images/portafolio/fogonSM.jpg" className="card__image" alt="A dinosaur" placeholder="blurred" formats={['auto', 'webp']} />
                        <div className="card__overlay">
                            <div className="card__header">
                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                <StaticImage src="../images/portafolio/fogonSM.jpg" className="card__thumb" alt="A dinosaur" placeholder="blurred" formats={['auto', 'webp']} />
                                <div className="card__header-text">
                                    <h3 className="card__title">El Fogón | Social Media</h3>
                                    <span className="card__status">2021 - BERWYN, ILL.</span>
                                </div>
                            </div>
                            <p className="card__description">"El Fogón" is a restaurant of Mexican kitchen which uses recipes passed down from generation to generation. and at the same time they have adapted to ...</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.behance.net/gallery/131563293/JB-GAMING-BRANDING" className="card">
                        <StaticImage src="../images/portafolio/jb.jpg" className="card__image" alt="A dinosaur" placeholder="blurred" formats={['auto', 'webp']} />
                        <div className="card__overlay">
                            <div className="card__header">
                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                <StaticImage src="../images/portafolio/jb.jpg" className="card__thumb" alt="A dinosaur" placeholder="blurred" formats={['auto', 'webp']} />
                                <div className="card__header-text">
                                    <h3 className="card__title">JB GAMING | Branding</h3>
                                    <span className="card__status">2021 - DOLORES HIDALGO, GTO</span>
                                </div>
                            </div>
                            <p className="card__description">JB es un streamer mexicano que busca hacerce un lugar en el mundo del streaming, le gusta jugar mucho juegos retro y shooters pero tambien juega una inmensa variedad de juegos.</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.behance.net/gallery/131019383/Antonio-Pena-Arquitectura" className="card">
                        <StaticImage src="../images/portafolio/atonio.jpg" className="card__image" alt="A dinosaur" placeholder="blurred" formats={['auto', 'webp']} />
                        <div className="card__overlay">
                            <div className="card__header">
                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                <StaticImage src="../images/portafolio/atonio.jpg" className="card__thumb" alt="A dinosaur" placeholder="blurred" formats={['auto', 'webp']} />
                                <div className="card__header-text">
                                    <h3 className="card__title">Antonio Peña | Branding</h3>
                                    <span className="card__status">2021 - GUANAJUATO</span>
                                </div>
                            </div>
                            <p className="card__description">Antonio Peña Arquitectura es la marca personal del arquitecto José Antonio Peña, el cual buscaba que mediante la imagen de su marca personal pudiera reflejar ...</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.behance.net/gallery/114624519/Los-Huspedes-Podcast-%28Rediseno%29" className="card">
                        <StaticImage src="../images/portafolio/huespedesN.jpg" className="card__image" alt="A dinosaur" placeholder="blurred" formats={['auto', 'webp']} />
                        <div className="card__overlay">
                            <div className="card__header">
                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                <StaticImage src="../images/portafolio/huespedesN.jpg" className="card__thumb" alt="A dinosaur" placeholder="blurred" formats={['auto', 'webp']} />
                                <div className="card__header-text">
                                    <h3 className="card__title">Los Huéspedes | ReBranding</h3>
                                    <span className="card__status">2021 - DOLORES HIDALGO </span>
                                </div>
                            </div>
                            <p className="card__description">Los Huéspedes es un podcast :)</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.behance.net/gallery/113878273/Gaia-Evolution" className="card">
                        <StaticImage src="../images/portafolio/gaia.jpg" className="card__image" alt="A dinosaur" placeholder="blurred" formats={['auto', 'webp']} />
                        <div className="card__overlay">
                            <div className="card__header">
                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                <StaticImage src="../images/portafolio/gaia.jpg" className="card__thumb" alt="A dinosaur" placeholder="blurred" formats={['auto', 'webp']} />
                                <div className="card__header-text">
                                    <h3 className="card__title">Gaia Evolution</h3>
                                    <span className="card__status">2019 - CHICAGO, ILL</span>
                                </div>
                            </div>
                            <p className="card__description">Gaia Evolution es un Salon / Spa de la ciudad de CHICAGO</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.behance.net/gallery/113580299/Los-Huspedes-Podcast" className="card">
                        <StaticImage src="../images/portafolio/huespedesOG.jpg" className="card__image" alt="A dinosaur" placeholder="blurred" formats={['auto', 'webp']} />
                        <div className="card__overlay">
                            <div className="card__header">
                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                <StaticImage src="../images/portafolio/huespedesOG.jpg" className="card__thumb" alt="A dinosaur" placeholder="blurred" formats={['auto', 'webp']} />
                                <div className="card__header-text">
                                    <h3 className="card__title">Los Huéspedes Podcast | ReBranding</h3>
                                    <span className="card__status">2019 - DOLORES HIDALGO </span>
                                </div>
                            </div>
                            <p className="card__description">Los Huéspedes es un podcast :)</p>
                        </div>
                    </a>
                </li>

            </ul>
            <StyledFooter>

                <FooterText>
                    <FooterContact>
                        <Text>
                            <h3><Trans>FOOTER_TITTLE</Trans></h3>
                            <p><Trans>FOOTER_DIRECTION</Trans></p>
                            <p><Trans>FOOTER_CITY</Trans></p>
                        </Text>
                        <Text>
                            <p><Trans>FOOTER_PHONE</Trans></p>
                            <p><Trans>FOOTER_MAIL</Trans></p>
                        </Text>
                    </FooterContact>
                    <FooterSocial>
                        <Social><a href="https://www.instagram.com/lduckystudio/" target="_blanck" color="white">Instagram</a></Social>
                        <Social><a href="https://www.facebook.com/lduckystudio" target="_blanck" color="white">Facebook</a></Social>
                        <Social><a href="https://www.linkedin.com/company/lduckystudio/" target="_blanck" color="white">LinkedIn</a></Social>
                        <Social><a href="https://es.fiverr.com/axeljovannyqt?up_rollout=true" target="_blanck" color="white">Fiverr</a></Social>
                        <Social><a href="https://www.behance.net/axeljovanny" target="_blanck" color="white">Behance</a></Social>

                    </FooterSocial>

                </FooterText>
                <FooterImage web>
                    <ImgFooter />
                </FooterImage>
                <FooterImage movil>
                    <ImgFooterMovil />
                </FooterImage>
                <StyledIcons footer open>
                    <FacebookIcon fill={colors.softWhite} className="svgAbout" />
                    <BehanceIcon fill={colors.softWhite} className="svgAbout" />
                    <InstagramIcon fill={colors.softWhite} className="svgAbout" />
                    <LinkedinIcon fill={colors.softWhite} className="svgAbout" />
                    <FiverrIcon fill={colors.softWhite} className="svgAbout" />
                </StyledIcons>
            </StyledFooter>
        </>
    )

}

export default Work