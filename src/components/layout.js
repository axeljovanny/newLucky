import React from "react"
import PropTypes from "prop-types"
import { GlobalStyles } from '../styles/js/index';
import '../styles/css/splash.css'
import './main'
import { StaticImage } from "gatsby-plugin-image";


if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => (

  <>
    <meta
      name='viewport'
      content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <GlobalStyles />
    <div id="loader-wrapper">
      <div id="loader">
        <div class="imagen">
          <StaticImage src="../images/logoSplash.png" width={450} height={450} alt='logo splash' formats={['auto', 'webp']}></StaticImage>
        </div>
        <svg width="0" height="0">
          <filter id="gooey-fill">
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -16" result="goo" />
          </filter>
        </svg>
        <div class="fill">
          <div class="gooey-container">
            <span class="level">
              <span class="bubble"></span>
              <span class="bubble"></span>
              <span class="bubble"></span>
              <span class="bubble"></span>
              <span class="bubble"></span>
              <span class="bubble"></span>
              <span class="bubble"></span>
              <span class="bubble"></span>
            </span>
          </div>
        </div>


      </div>
      <div class="loader-section section-right"></div>
    </div>
    <main>{children}</main>
  </>

)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
