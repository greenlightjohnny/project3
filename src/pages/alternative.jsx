import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout2"
import Styles from "./test.module.scss"
import SEO from "../components/seo"
const Alternative = ({ data }) => {
  const mydata = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Alternative Treatments" />
      <div className={`${Styles.mcon} ${Styles.mcontop}`}>
        <h1>{data.allMarkdownRemark.edges[1].node.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: mydata[1].node.html }}></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/alternative/" } }
      sort: { order: ASC, fields: frontmatter___date }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default Alternative
