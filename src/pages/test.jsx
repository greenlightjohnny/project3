import React from "react"

const Mytest = ({ data }) => {
  const title = data.markdownRemark.frontmatter.title
  return (
    <div>
      <h3>{title}</h3>
    </div>
  )
}

export const getdata = graphql`
  query MyQuery {
    markdownRemark(fileAbsolutePath: { regex: "/pagetop1/" }) {
      frontmatter {
        title
      }
    }
  }
`

export default Mytest
