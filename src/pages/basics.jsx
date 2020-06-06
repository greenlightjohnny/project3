import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout2"
import Styles from "./test.module.scss"
const Basics = ({ data }) => (
  <Layout>
    <div className={Styles.mcon}>
      <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h1>
    </div>
  </Layout>
)

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/main/" } }
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

export default Basics
