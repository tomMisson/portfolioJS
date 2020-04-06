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
            theme
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

        if(post.node.frontmatter.titleimg !== null)
        {
          return (
            <Link to={post.node.frontmatter.path} key={post.node.frontmatter.path}>
            <section className="post">
              <img alt="title card" src={post.node.frontmatter.titleimg}/>
              <h3>{post.node.frontmatter.title}</h3>
              <p>{post.node.frontmatter.desc}</p>
              <small>{post.node.frontmatter.theme}</small> - 
              <small>{post.node.frontmatter.date}</small>
            </section>
            </Link>
          )
        }

        else if(post.node.frontmatter.theme !== null)
        {
          return (
            <Link to={post.node.frontmatter.path} key={post.node.frontmatter.path}>
            <section className="post">
              <img alt="title card" src={post.node.frontmatter.titleimg}/>
              <h3>{post.node.frontmatter.title}</h3>
              <p>{post.node.frontmatter.desc}</p>
              <small>{post.node.frontmatter.theme}</small> - 
              <small>{post.node.frontmatter.date}</small>
            </section>
            </Link>
          )
        }

        else{
          return (
            <Link to={post.node.frontmatter.path} key={post.node.frontmatter.path}>
              <section className="post">
                <h3>{post.node.frontmatter.title}</h3>
                <p>{post.node.frontmatter.desc}</p>
                <small>{post.node.frontmatter.date}</small>
              </section>
            </Link>
          )
        }
      })
    }
   </>
  )
}

export default Posts
