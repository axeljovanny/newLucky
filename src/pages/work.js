import React from "react"
import { graphql } from 'gatsby'
import { SEO, Work } from "../components"





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