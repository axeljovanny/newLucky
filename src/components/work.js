import React from "react"
import { Trans, Link } from 'gatsby-plugin-react-i18next';
import "../styles/css/cards.css"
import { FooterContact, FooterImage, FooterSocial, FooterText, Social, StyledFooter, Text } from "../styles/js/footer";
import { ImgFooter, ImgFooterMovil } from "./imagesComponets";
import { BehanceIcon, FacebookIcon, FiverrIcon, InstagramIcon, LinkedinIcon } from "../images/icons/icons";
import { colors } from "../utils/const";
import { StyledIcons } from "../styles/js/navigator";
import { StyledButtonLeft } from "../styles/js/header";





const Work = ({ siteTitle }) => {

    return (
        <>
            <div className="header">
                <StyledButtonLeft>
                    <Link key="scroll" to="/"><Trans>Home</Trans><span></span></Link>
                </StyledButtonLeft>
                <h1>
                    PORTAFOLIO
                </h1>

            </div>
            <ul className="cards">
                <li>
                    <a target="_blank" href="https://www.behance.net/gallery/133221947/Jesus-Mejia-Branding" className="card">
                        <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
                        <div className="card__overlay">
                            <div className="card__header">
                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                                <div className="card__header-text">

                                    <h3 className="card__title">Jesús Mejía | Branding</h3>
                                    <span className="card__status">2021 - LEÓN</span>
                                </div>
                            </div>
                            <p className="card__description">Jesús Mejía Nutriólogo Clínico Deportivo, is the personal brand of Jesús Mejía it´s a clinical nutritionist and sports nutritionist who resides in the city of León, Guanajuato, Mexico.
                                In his personal brand the tastes and essence of Jesús Mejía are reflected, the project covered the branding of his personal brand, a guide to the uses of his brand, and finally the construction of elements for his Instagram Feed.</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.behance.net/gallery/130700059/Social-Media-Jesus-Mejia" className="card">
                        <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
                        <div className="card__overlay">
                            <div className="card__header">
                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                <img className="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
                                <div className="card__header-text">
                                    <h3 className="card__title">Social Media | Jesús Mejía</h3>
                                    <span className="card__status">2021 - LEÓN</span>
                                </div>
                            </div>
                            <p className="card__description">Jesús Mejía Nutriólogo Clínico Deportivo, is the personal brand of Jesús Mejía it´s a clinical nutritionist and sports nutritionist who resides in the city of León, Guanajuato, Mexico.
                                In his personal brand the tastes and essence of Jesús Mejía are reflected, the project covered the branding of his personal brand, a guide to the uses of his brand, and finally the construction of elements for his Instagram Feed.</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.behance.net/gallery/131548055/El-Fogon" className="card">
                        <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
                        <div className="card__overlay">
                            <div className="card__header">
                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                                <div className="card__header-text">
                                    <h3 className="card__title">El Fogón | Branding</h3>
                                    <span className="card__status">2021 - BERWYN, ILL.</span>
                                </div>
                            </div>
                            <p className="card__description">"El Fogón" is a restaurant of Mexican kitchen which uses recipes passed down from generation to generation. and at the same time they have adapted to modern times, searching the wellness of their diners, delivering gluten-free, vegetarian, and vegans saucers, but without losing the essence of their roots of origin.</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.behance.net/gallery/131459655/El-Fogon-Web" className="card">
                        <img src="https://i.imgur.com/2DhmtJ4.jpg" className="card__image" alt="" />
                        <div className="card__overlay">
                            <div className="card__header">
                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                <img className="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
                                <div className="card__header-text">
                                    <h3 className="card__title">El Fogón | Web</h3>
                                    <span className="card__status">2021 - BERWYN, ILL.</span>
                                </div>
                            </div>
                            <p className="card__description">"El Fogón" is a restaurant of Mexican kitchen which uses recipes passed down from generation to generation. and at the same time they have adapted to modern times, searching the wellness of their diners, delivering gluten-free, vegetarian, and vegans saucers, but without losing the essence of their roots of origin.</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.behance.net/gallery/131375731/El-Fogon-Social-Media" className="card">
                        <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
                        <div className="card__overlay">
                            <div className="card__header">
                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                                <div className="card__header-text">
                                    <h3 className="card__title">El Fogón | Social Media</h3>
                                    <span className="card__status">2021 - BERWYN, ILL.</span>
                                </div>
                            </div>
                            <p className="card__description">"El Fogón" is a restaurant of Mexican kitchen which uses recipes passed down from generation to generation. and at the same time they have adapted to modern times, searching the wellness of their diners, delivering gluten-free, vegetarian, and vegans saucers, but without losing the essence of their roots of origin.</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.behance.net/gallery/131019383/Antonio-Pena-Arquitectura" className="card">
                        <img src="https://i.imgur.com/2DhmtJ4.jpg" className="card__image" alt="" />
                        <div className="card__overlay">
                            <div className="card__header">
                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                <img className="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
                                <div className="card__header-text">
                                    <h3 className="card__title">Antonio Peña Arquitectura | Branding</h3>
                                    <span className="card__status">2021 - GUANAJUATO</span>
                                </div>
                            </div>
                            <p className="card__description">Antonio Peña Arquitectura es la marca personal del arquitecto José Antonio Peña, el cual buscaba que mediante la imagen de su marca personal pudiera reflejar su esencia arquitectónica e influencias que lo hacen crear sus proyectos. Naming, Logo, Brand Identity and Brand Guideline By Lucky Ducky Studio</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.behance.net/gallery/114624519/Los-Huspedes-Podcast-%28Rediseno%29" className="card">
                        <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
                        <div className="card__overlay">
                            <div className="card__header">
                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                                <div className="card__header-text">
                                    <h3 className="card__title">Los Huéspedes Podcast | ReBranding</h3>
                                    <span className="card__status">2021 - DOLORES HIDALGO </span>
                                </div>
                            </div>
                            <p className="card__description">Los Huéspedes es un podcast :)</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.behance.net/gallery/113878273/Gaia-Evolution" className="card">
                        <img src="https://i.imgur.com/2DhmtJ4.jpg" className="card__image" alt="" />
                        <div className="card__overlay">
                            <div className="card__header">
                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                <img className="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
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
                    <a target="_blank" href="https://www.behance.net/gallery/113580299/Los-Huspedes-Podcast" className="card">
                        <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
                        <div className="card__overlay">
                            <div className="card__header">
                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                                <div className="card__header-text">
                                    <h3 className="card__title">Los Huéspedes Podcast | ReBranding</h3>
                                    <span className="card__status">2019 - DOLORES HIDALGO </span>
                                </div>
                            </div>
                            <p className="card__description">Los Huéspedes es un podcast :)</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.behance.net/gallery/131563293/JB-GAMING-BRANDING" className="card">
                        <img src="https://i.imgur.com/2DhmtJ4.jpg" className="card__image" alt="" />
                        <div className="card__overlay">
                            <div className="card__header">
                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                <img className="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
                                <div className="card__header-text">
                                    <h3 className="card__title">JB GAMING | Branding</h3>
                                    <span className="card__status">2021 - DOLORES HIDALGO, GTO</span>
                                </div>
                            </div>
                            <p className="card__description">JB es un streamer mexicano que busca hacerce un lugar en el mundo del streaming, le gusta jugar mucho juegos retro y shooters pero tambien juega una inmensa variedad de juegos.</p>
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