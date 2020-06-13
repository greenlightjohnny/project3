import React from "react"
import Styles from "./test.module.scss"
import { Link, graphql } from "gatsby"
import QPhoto from "../images/q.svg"
import SciPhoto from "../images/sci.svg"
import MedPhoto from "../images/med.svg"
import Layout from "../components/layout2"
import SEO from "../components/seo"

export default class Mytest extends React.Component {
  render() {
    const data = this.props.data.allMarkdownRemark
    //const title = data.allMarkdownRemark.edges
    //const html = data.allMarkdownRemark.edges

    const siteTitle = "her2"
    console.log(data)
    return (
      <div>
        <Layout>
          <SEO title="Home" />
          <div className={Styles.sect1}>
            <div className={Styles.flex1}>
              <h1 className={Styles.htop}>
                HER2.<span className={Styles.me}>ME</span>
              </h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.edges[0].node.html,
                }}
              ></div>

              <Link className={Styles.button1} to="/basics">
                Basics{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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

          <div className={Styles.sect2}>
            <div className={Styles.flex2}>
              <div>
                <img src={SciPhoto}></img>
              </div>
              <div>
                <h1>{data.edges[1].node.frontmatter.title}</h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.edges[1].node.html,
                  }}
                ></div>
                <Link className={Styles.button1} to="/traditional">
                  Traditional{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 19"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className={Styles.sect3}>
            <div className={Styles.flex3}>
              <div>
                <h1>{data.edges[2].node.frontmatter.title}</h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.edges[2].node.html,
                  }}
                ></div>
                <Link className={Styles.button1} to="/alternative">
                  Alternative{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 19"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
              <div>
                <img src={MedPhoto}></img>
              </div>
            </div>
          </div>
          <div className={Styles.sect4}>
            <div className={Styles.inner}>
              <h1>Latest Blog Posts:</h1>
              <Link className={Styles.button1} to="/alternative">
                See All{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
            <div className={Styles.flex4}>
              <div>One</div>
              <div>Two5</div>
              <div>Three</div>
              <div>Four</div>
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

{
  /* <div className={Styles.landing}>
      <h3>{title[0].node.frontmatter.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: html[0].node.html }}></div>
      <h3>{title[1].node.frontmatter.title}</h3>
      </div> */
}
