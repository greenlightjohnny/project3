import React from "react"

const Mytest = ({ data }) => {
  const title = data.allMarkdownRemark.edges
  console.log(title)
  return (
    <div>
      <h3>{title[0].node.frontmatter.title}</h3>
      <h3>{title[1].node.frontmatter.title}</h3>
    </div>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/main/" } }) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default Mytest
