import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from "../components/Posts"

export default () => {

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hey everyone! <span role="img" aria-label="waving emoji">👋</span></h1>
      <p>Welcome to my corner of the internet where I can share the things in life that make me happy! </p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      </div>

      <Posts/>

    </Layout>
  )
}