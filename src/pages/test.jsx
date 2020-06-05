import React from "react"

const Mytest = ({ data }) => {
  const title = data.allMarkdownRemark.edges
  console.log(title)
  return (
    <div>
      <h3>{title[1].node.frontmatter.title}</h3>

      <p>hi</p>
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
