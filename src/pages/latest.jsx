import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Styles from "./latest.module.scss"
import { rhythm } from "../utils/typography"
export default function Latest() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        allMdx(
          sort: { fields: frontmatter___date, order: DESC }
          filter: { fileAbsolutePath: { regex: "/blog/" } }
        ) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMM DD, YYYY")
                title
              }
              internal {
                description
              }
            }
          }
        }
      }
    `
  )

  console.log(data.allMdx.edges)
  const dat = data.allMdx.edges
  return (
    <section className={Styles.main}>
      <div className={Styles.inner}>
        <h2>Latest Blog Posts:</h2>
        <Link className={Styles.button1} to="/blog">
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
      <div className={Styles.con}>
        {dat.map((post, index) => {
          return (
            <div key={post.node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link
                  style={{ boxShadow: `none` }}
                  to={`blog${post.node.fields.slug}`}
                >
                  {post.node.frontmatter.title}
                </Link>
              </h3>
              <small>{post.node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.node.internal.description || post.node.excerpt,
                }}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
