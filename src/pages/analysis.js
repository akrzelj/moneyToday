import React from "react"
import { Link, graphql } from "gatsby"
import { isLoggedIn } from "../services/auth"

import Layout from "../components/Layout"
import MainPost from "../components/MainPost/index"
import SecondPost from "../components/SecondPost/index"
import OtherPost from "../components/OtherPost/index"
import PostContainer from "../components/PostContainer/index"

export default ({ data }) => {
  if (data.allMarkdownRemark === null) return <div>NO DATA</div>

  let posts = data.allMarkdownRemark.edges
  let noviPostovi = []

  posts.forEach(post => {
    const title = post.node.frontmatter.title
    const type = post.node.frontmatter.type
    const thumbnail = post.node.frontmatter.indexImage.childImageSharp.fluid
    const content = post.node.excerpt
    if (posts.indexOf(post) === 0) {
      noviPostovi.push(
        <MainPost
          key={posts.indexOf(post)}
          title={title}
          fluid={thumbnail}
          to={type + "/" + post.node.frontmatter.slug}
        >
          {content}
        </MainPost>
      )
    } else if (posts.indexOf(post) === 1 || posts.indexOf(post) === 2) {
      noviPostovi.push(
        <SecondPost
          key={posts.indexOf(post)}
          title={title}
          fluid={thumbnail}
          to={type + "/" + post.node.frontmatter.slug}
        >
          {content}
        </SecondPost>
      )
    } else {
      noviPostovi.push(
        <OtherPost
          key={posts.indexOf(post)}
          title={title}
          fluid={thumbnail}
          to={type + "/" + post.node.frontmatter.slug}
        >
          {content}
        </OtherPost>
      )
    }
  })

  const logInMsgStyle = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    fontSize: "30px",
  }

  return (
    <Layout>
      {isLoggedIn() ? (
        // ovdje ubaciti ckomponentu postova
        <PostContainer> {noviPostovi} </PostContainer>
      ) : (
        <>
          <br />
          <br />
          <br />
          <div style={logInMsgStyle}>
            <Link to="/app/login">Log in </Link>&nbsp; or
            <Link to="/app/register">&nbsp; register &nbsp; </Link>to see
            restricted content
          </div>
        </>
      )}
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "news" } } }) {
      edges {
        node {
          frontmatter {
            slug
            title
            type
            indexImage {
              childImageSharp {
                fluid {
                  aspectRatio
                  sizes
                  src
                  srcSet
                }
              }
            }
          }
          excerpt(pruneLength: 700)
        }
      }
    }
  }
`
