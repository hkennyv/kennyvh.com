import React from "react";
import Helmet from "react-helmet";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";
import config from "../../data/SiteConfig";
import "../styles/index.scss";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout-container">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        <Header menuLinks={config.menuLinks} />
        <main id="main-content">{children}</main>
        {/* <Footer config={config} /> */}
      </div>
    );
  }
}
