import React from "react"
import { StyledServices, Text, TextServices, TittleServices } from "../styles/js/services"
import { Trans } from 'gatsby-plugin-react-i18next';
import { StyledLine } from "../styles/js/navigator";



const Services = ({ siteTitle }) => {
    return (
        <>
            <StyledLine ></StyledLine>

            <StyledServices>

                <TittleServices>
                    <h2><Trans>SERVICES_TITTLE</Trans></h2>
                </TittleServices>
                <TextServices>
                    <Text>
                        <h3><Trans>SERVICES_BRANDING</Trans></h3>
                        <ul>
                            <li><Trans>BRANDING_ONE</Trans></li>
                            <li><Trans>BRANDING_TWO</Trans></li>
                            <li><Trans>BRANDING_THREE</Trans></li>
                            <li><Trans>BRANDING_FOUR</Trans></li>
                            <li><Trans>BRANDING_FIVE</Trans></li>
                            <li><Trans>BRANDING_SIX</Trans></li>
                        </ul>
                    </Text>
                    <Text>
                        <h3><Trans>SERVICES_DESIGN</Trans></h3>
                        <ul>
                            <li><Trans>DESIGN_ONE</Trans></li>
                            <li><Trans>DESIGN_TWO</Trans></li>
                            <li><Trans>DESIGN_THREE</Trans></li>
                            <li><Trans>DESIGN_FOUR</Trans></li>
                            <li><Trans>DESIGN_FIVE</Trans></li>
                            <li><Trans>DESIGN_SIX</Trans></li>
                        </ul>
                    </Text>
                    <Text>
                        <h3><Trans>SERVICES_WEB</Trans></h3>
                        <ul>
                            <li><Trans>WEB_ONE</Trans></li>
                            <li><Trans>WEB_TWO</Trans></li>
                            <li><Trans>WEB_THREE</Trans></li>
                            <li><Trans>WEB_FOUR</Trans></li>
                            <li><Trans>WEB_FIVE</Trans></li>
                        </ul>
                    </Text>
                    <Text>
                        <h3><Trans>SERVICES_DEVELOP</Trans></h3>
                        <ul>
                            <li><Trans>DEVELOP_ONE</Trans></li>
                            <li><Trans>DEVELOP_TWO</Trans></li>
                            <li><Trans>DEVELOP_THREE</Trans></li>
                        </ul>
                    </Text>
                    <Text>
                        <h3><Trans>SERVICES_PRODUCTION</Trans></h3>
                        <ul>
                            <li><Trans>PRODUCTION_ONE</Trans></li>
                            <li><Trans>PRODUCTION_TWO</Trans></li>
                            <li><Trans>PRODUCTION_THREE</Trans></li>
                            <li><Trans>PRODUCTION_FOUR</Trans></li>
                        </ul>
                    </Text>
                </TextServices>
            </StyledServices>
        </>
    )

}

export default Services