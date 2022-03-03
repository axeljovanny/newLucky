import React from "react"
import { Trans } from 'gatsby-plugin-react-i18next';
import { FooterContact, FooterImage, FooterSocial, FooterText, Social, StyledFooter, Text } from "../styles/js/footer";
import { StyledLine } from "../styles/js/navigator";
import { ImgFooter } from "./imagesComponets";




const Footer = ({ siteTitle }) => {
    return (
        <>
            <StyledLine white footer></StyledLine>
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
                        <Social><a href="https://www.facebook.com/lduckystudio" target="_blanck" color="white">TikTok</a></Social>
                        <Social><a href="https://es.fiverr.com/axeljovannyqt?up_rollout=true" target="_blanck" color="white">Fiverr</a></Social>
                        <Social><a href="https://www.behance.net/axeljovanny" target="_blanck" color="white">Behance</a></Social>
                    </FooterSocial>

                </FooterText>
                <FooterImage>
                    <ImgFooter />
                </FooterImage>
            </StyledFooter>
        </>
    )

}

export default Footer