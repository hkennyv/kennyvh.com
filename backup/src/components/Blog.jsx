import React, { Component } from "react";

class Blog extends Component {

  render() {
    const { children } = this.props;
    return (
      <div className="blog">
        <h1>
          UNDER CONSTRUCTION :)
        </h1>
        {children}
      </div>
    );
  }
}

export default Blog;
