import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import About from "../components/About";
import PostListing from "../components/PostListing";
import config from "../../data/SiteConfig";

class IndexPage extends Component {
  renderBio = () => {
    return (
      <div className="bio">
        <h1>{`Hi there! I'm Kenny. 👋`}</h1>
        <p>
          I'm a <strong>DevOps Engineer</strong> at{"  "}
          <a href="http://www.rejouleenergy.com/">
            <strong>ReJoule, Inc.</strong>
          </a>{" "}
          We are an early-stage startup with an amazing team whose goal is to
          maximize the value of every battery through advanced battery
          diagnostics.
        </p>
        <p>
          I'm interested in solving high societal/environmental impact problems
          through technology and engineering. I love learning and experimenting
          with technology across the entire stack (from making schematics and
          laying out PCBs to writing drivers to software interfaces and APIs).
        </p>
        <p>
          I'm originally from Tracy, CA and now live in{" "}
          <strong>Garden Grove, CA</strong>. Some of my interests outside of
          work include:
        </p>
        <ul className="interests">
          <li>bicycles ️🚲</li>
          <li>cats 🐱</li>
          <li>computers 💻</li>
          <li>motorcycles 🏍</li>
          <li>powerlifting 🏋️‍♀️</li>
          <li>traveling 🧳</li>
        </ul>
      </div>
    );
  };

  render() {
    const { data } = this.props;
    const postEdges = data.latest.edges;

    return (
      <Layout>
        <Helmet title={`Kenny Huynh`} />
        <div className="container">
          {this.renderBio()}

          <section>
            <h2>Links</h2>
          </section>

          <section>
            <h2>
              Recent Posts <Link to="/blog">View All</Link>
            </h2>
            <PostListing postEdges={postEdges} />
          </section>
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
      limit: 5
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
