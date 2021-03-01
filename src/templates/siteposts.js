import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SitePosts = ({ data }) => {
  const { heading, title, image } = data.contentfulSitePost
  return (
    <Layout>
      <SEO title={heading} />
      <div className="ourpost">
        <h1>{heading}</h1>
        <img alt={title} src={image} />
        <Link to="/siteposts">View more posts</Link>
        <Link to="\/">Back to Home</Link>
      </div>
    </Layout>
  )
}

export default SitePosts

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulSitePost(slug: { eq: $slug }) {
      heading

      slug

      image {
        file {
          url
        }
      }
    }
  }

 `
