import React from "react"
import { graphql, Link } from 'gatsby'
import { SEO, Header, Navigator, About, Services, Footer } from "../components"
import { StyledButton } from '../styles/js/header'
import { Trans } from 'gatsby-plugin-react-i18next';





const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Navigator />
      <Header id="header" siteTitle="Home" />
      <StyledButton>
        <a href="http://paypal.me/luckyduckystudio"><Trans>Paypal</Trans><span></span></a>
      </StyledButton>
      <About id="about" />
      <Services id="services" />
      <Footer id="footer" />

    </>
  )
};


export default IndexPage

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
