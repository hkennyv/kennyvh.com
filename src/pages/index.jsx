import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import About from "../components/About";
import PostListing from "../components/PostListing";
import config, { userLinks } from "../../data/SiteConfig";

import khuynh from "../images/khuynh.jpg";

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userLinksColors: this.getColors(),
    };
  }

  renderBio = () => {
    return (
      <div className="bioContainer">
        <div className="bio">
          <h1>{`Hi there! I'm Kenny. 👋`}</h1>
          <p>
            <strong>DevOps Engineer</strong> at{"  "}
            <a href="http://www.rejouleenergy.com/">
              <strong>ReJoule, Inc.</strong>
            </a>{" "}
          </p>
          <p>
            I'm interested in solving high societal/environmental impact
            problems through technology and engineering. I love learning and
            experimenting with technology across the entire stack (from making
            schematics and laying out PCBs to writing drivers to software
            interfaces and APIs).
          </p>
        </div>
        <img className="bioImage" src={khuynh} />
      </div>
    );
  };

  renderLinks = () => {
    const { userLinksColors } = this.state;

    return (
      <div className="userLinks">
        {userLinks.map((cfg, i) => (
          <a href={cfg.url} target="_blank">
            <div
              style={{
                color: userLinksColors[i],
                borderColor: userLinksColors[i],
              }}
              onMouseEnter={() =>
                this.setState({ userLinksColors: this.getColors() })
              }
              onMouseLeave={() =>
                this.setState({ userLinksColors: this.getColors() })
              }
              onTouchStart={() =>
                this.setState({ userLinksColors: this.getColors() })
              }
              className="userLink"
            >
              {cfg.label}
            </div>
          </a>
        ))}
      </div>
    );
  };

  renderPosts = () => {
    const { data } = this.props;
    const postEdges = data.latest.edges;

    return (
      <div className="recentPosts">
        <h2>
          Recent Posts <Link to="/blog">View All</Link>
        </h2>
        <PostListing postEdges={postEdges} />
      </div>
    );
  };

  /*
   * helper functions to cycle color for userLinks
   */
  getColor = () => {
    let colors = ["#24d05a", "#eb4888", "#10a2f5", "#e9bc3f", "#6e78ff"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  getColors = () => userLinks.map((_) => this.getColor());

  render() {
    return (
      <Layout>
        <Helmet title={`Kenny Huynh`} />
        <div className="container">
          <section>{this.renderBio()}</section>

          <section>{this.renderLinks()}</section>

          <section>{this.renderPosts()}</section>
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
