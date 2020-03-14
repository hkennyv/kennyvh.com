import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Blog from "../components/Blog";
import config from "../../data/SiteConfig";

class BlogPage extends Component {
  render() {
    const { children } = this.props;
    return (
      <Layout>
        <div className="blog-container">
          <Helmet title={`Blog | ${config.siteTitle}`} />
          <Blog children={children} />
        </div>
      </Layout>
    );
  }
}

export default BlogPage;
