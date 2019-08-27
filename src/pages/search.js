import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import MainPost from "../components/MainPost/index"
import SearchPostContainer from "../components/SearchPostContainer/index"

import { getData } from "../services/searchService"

var noDataStyle = {
  display: "flex",
  justifyContent: "center",
  fontSize: "30px",
  marginTop: "50px",
  color: "#5d7a8f",
}

export default ({ data }) => {
  if (data.allMarkdownRemark === null) return <div>NO DATA</div>

  let posts = data.allMarkdownRemark.edges
  let noviPostovi = []
  const filterData = getData()

  posts
    .filter(post => post.node.excerpt.toLowerCase().includes(filterData))
    .forEach(post => {
      const title = post.node.frontmatter.title
      const type = post.node.frontmatter.type
      const thumbnail = post.node.frontmatter.indexImage.childImageSharp.fluid
      const content = post.node.excerpt
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
    })

  return (
    <Layout>
      {noviPostovi.length !== 0 ? (
        <SearchPostContainer> {noviPostovi} </SearchPostContainer>
      ) : (
        <div style={noDataStyle}>Nothing found</div>
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
