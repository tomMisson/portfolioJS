/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: '90%',
          padding: `1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          <a className="social" href="https://twitter.com/thomas_misson">Twitter </a> &bull;
          <a className="social" href="http://github.com/tomMisson"> GitHub</a> &bull;
          <a className="social" href="https://www.linkedin.com/in/thomasmisson/"> LinkedIn</a>
          <br/>
          © {new Date().getFullYear()}
          {` `}
          Tom Misson
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
