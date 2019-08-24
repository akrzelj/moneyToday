import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import MainPost from "../components/MainPost/index"
import SecondPost from "../components/SecondPost/index"
import OtherPost from "../components/OtherPost/index"
import PostContainer from "../components/PostContainer/index"

import { getData } from "../services/searchService"

export default ({ data }) => {
  if (data.allMarkdownRemark === null) return <div>NO DATA</div>

  let posts = data.allMarkdownRemark.edges
  let noviPostovi = []
  const filterData = getData()

  console.log("%%%")
  console.log(filterData)
  console.log(posts.filter(post1 => post1.node.excerpt.includes(filterData)))

  posts
    .filter(post => post.node.excerpt.includes(filterData))
    .forEach(post => {
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

  return (
    <Layout>
      <PostContainer> {noviPostovi} </PostContainer>
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
