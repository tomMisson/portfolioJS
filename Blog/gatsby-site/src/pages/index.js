import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from "../components/posts"

export default () => {

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hey everyone! <span role="img" aria-label="waving emoji">👋</span></h1>
      <p>Welcome to my corner of the internet!🌎 This page will detail hacks and bodges I have done with tech, travel, food and drink and just about anything else under the sun that I want to write about. </p>
      <p>Before I start, let me claify the naming of the site, before you have any misconceptions 🧐... One, see whisky/gin posts for my appreciation behind drinks. Two, my hackathon experience has driven me to <strong>ALWAYS</strong> say something is powered by something if its remotely contributing to it, aswell as ending things in athon, prefixing with hack. Hence the really awful name that is very likely subject to change.</p>
      <p>I also say everyone in the title but I don't know who will be reading this 🤔 This was mainly meant as a form of commiting things that I find intresting or bizzare that I want to talk about to paper 📝 (well, a markdown file that is interpereted...) and be able to refer people to my thoughts through the internet.  </p>
      <br/>
      <h2>Posts:</h2>

      <Posts/>

    </Layout>
  )
}