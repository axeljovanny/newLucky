import React from "react"
import { graphql, Link } from 'gatsby'
import { SEO, Work, Header, Footer } from "../components"
import { StyledButton } from '../styles/js/header'
import { Trans } from 'gatsby-plugin-react-i18next';





const IndexPage = () => {
    return (
        <>
            <SEO title="Work" />
            <Work />
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