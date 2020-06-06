import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout2"
import Styles from "./test.module.scss"
const Traditional = ({ data }) => {
  const mydata = data.allMarkdownRemark.edges
  return (
    <Layout>
      <div className={Styles.mcon}>
        <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: mydata[0].node.html }}></div>
      </div>
      <div className={Styles.mcon}>
        <h1>{data.allMarkdownRemark.edges[1].node.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: mydata[1].node.html }}></div>
      </div>
      <div className={Styles.mcon}>
        <h1>{data.allMarkdownRemark.edges[2].node.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: mydata[2].node.html }}></div>
      </div>
      <div className={Styles.mcon}>
        <h1>{data.allMarkdownRemark.edges[3].node.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: mydata[3].node.html }}></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/traditional/" } }
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

export default Traditional
