import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

class TagsPage extends Component {
  render() {
    const { children } = this.props;
    return (
      <Layout>
        <div className="blog-container">
          <Helmet title={`Tags | ${config.siteTitle}`} />
        </div>
      </Layout>
    );
  }
}

export default TagsPage;
