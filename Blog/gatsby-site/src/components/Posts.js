import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "./index.css"

const Posts = () => {
  const data = useStaticQuery(graphql`
  query pageData {
    allMarkdownRemark (
      sort: {
        fields: [frontmatter___date]
        order: DESC
      }
    ){
      edges {
        node {
          frontmatter {
            title
            titleimg
            desc
            date(fromNow: true)
            path
          }
        }
      }
    }
  }
  `)

  return (
   <>
    {
      data.allMarkdownRemark.edges.map( post => {

        if(post.node.frontmatter.titleimg !== undefined)
        {
          return (
            <Link to={post.node.frontmatter.path}>
            <section className="post" key={post.node.frontmatter.path}>
              <img src={post.node.frontmatter.titleimg}/>
              <h3>{post.node.frontmatter.title}</h3>
              <p>{post.node.frontmatter.desc}</p>
              <small>{post.node.frontmatter.date}</small>
            </section>
            </Link>
          )
        }

        else{
          return (
            
              <section className="post" key={post.node.frontmatter.path}>
                <h3>{post.node.frontmatter.title}</h3>
                <p>{post.node.frontmatter.desc}</p>
                <small>{post.node.frontmatter.date}</small>
              </section>
          
          )
        }
      })
    }
   </>
  )
}

export default Posts
