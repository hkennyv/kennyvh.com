import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import About from "../components/About";
import PostListing from "../components/PostListing";
import config from "../../data/SiteConfig";

class IndexPage extends Component {
  render() {
    const { data } = this.props;
    const postEdges = data.latest.edges;

    return (
      <Layout>
        <div className="index-container">
          <Helmet title={`Index | ${config.siteTitle}`} />
          <h3>LATEST POSTS</h3>
          <PostListing postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
}

export default IndexPage;

/* eslint no-undef: "off" */
export const indexQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;