import React, { Component } from "react";

class Blog extends Component {

  render() {
    const { children } = this.props;
    return (
      <div className="blog">
        <h1>
          Edit Blog component or pages/blog.jsx to include your information.
        </h1>
        {children}
      </div>
    );
  }
}

export default Blog;
