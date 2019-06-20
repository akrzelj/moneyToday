import React from "react"
import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"

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
          title={title}
          fluid={thumbnail}
          to={type + "/" + post.node.frontmatter.slug}
        >
          {content}
        </OtherPost>
      )
    }
  })

  return (
    <Layout>
      {isLoggedIn() ? (
        // ovdje ubaciti ckomponentu postova
        <PostContainer> {noviPostovi} </PostContainer>
      ) : (
        <>
          You should <Link to="/app/login">log in</Link> or{" "}
          <Link to="/app/register">register</Link>to see restricted content
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
