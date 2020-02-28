import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Me from "../components/Me/Me";
import config from "../../data/SiteConfig";

class MePage extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`Me | ${config.siteTitle}`} />
          <Me />
        </div>
      </Layout>
    );
  }
}

export default MePage;
