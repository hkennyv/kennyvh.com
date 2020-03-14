import React from "react";
import Helmet from "react-helmet";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import config from "../../data/SiteConfig";
import "./index.css";

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
        <Home />
        <Footer config={config} />
      </div>
    );
  }
}
