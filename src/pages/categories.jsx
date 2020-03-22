import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

class CategoriesPage extends Component {
  render() {
    const { children } = this.props;
    return (
      <Layout>
        <div className="blog-container">
          <Helmet title={`Categories | ${config.siteTitle}`} />
        </div>
      </Layout>
    );
  }
}

export default CategoriesPage;
