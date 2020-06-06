import React from "react"
import Styles from "./test.module.scss"
import { Link, graphql } from "gatsby"
import QPhoto from "../images/q.svg"
import Layout from "../components/layout2"
class Mytest extends React.Component {
  render() {
    const data = this.props
    //const title = data.allMarkdownRemark.edges
    //const html = data.allMarkdownRemark.edges
    const siteTitle = "her2"
    console.log(data)
    return (
      <div>
        <Layout>
          <div className={Styles.sect1}>
            <div className={Styles.flex1}>
              <h1 className={Styles.htop}>
                HER2.<span className={Styles.me}>ME</span>
              </h1>
              <div></div>

              <Link className={Styles.button1} to="/basics">
                Basics{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
            <div className={Styles.medphoto}>
              <img src={QPhoto}></img>
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/main/" }
        frontmatter: { intro: {}, title: {} }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            intro
          }
          html
        }
      }
    }
  }
`

export default Mytest

{
  /* <div className={Styles.landing}>
      <h3>{title[0].node.frontmatter.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: html[0].node.html }}></div>
      <h3>{title[1].node.frontmatter.title}</h3>
      </div> */
}
