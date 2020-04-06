import React from "react"
import { graphql } from "gatsby"


export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  
  
  return (
    <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <p className="desc">{frontmatter.desc}</p>
        <small className="desc">{frontmatter.date}</small>
        <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    </div>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        desc
        title
      }
    }
  }
`