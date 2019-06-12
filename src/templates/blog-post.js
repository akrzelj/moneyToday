import React from "react"
import { graphql } from "gatsby"
import styles from "./styles.module.css"
import Layout from "../components/Layout/index"
import { SiteContainer } from "../components"

export default ({ data }) => {
  const { markdownRemark: post } = data

  const stranica = (
    <>
      <h1>{post.frontmatter.title}</h1>
      <section
        className={styles.Post}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </>
  )

  return (
    <Layout>
      <SiteContainer>{stranica}</SiteContainer>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        slug
        title
      }
    }
  }
`
