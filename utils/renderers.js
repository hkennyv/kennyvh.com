import React from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const flatten = (text, child) => {
  return typeof child === "string"
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
};

/**
 * HeadingRenderer is a custom renderer
 * It parses the heading and attaches an id to it to be used as an anchor
 */
export const HeadingRenderer = (props) => {
  const children = React.Children.toArray(props.children);
  const text = children.reduce(flatten, "");
  const slug = text.toLowerCase().replace(/\W/g, "-");
  return React.createElement("h" + props.level, { id: slug }, props.children);
};

/*
 * CodeBlockRenderer is a a custom renderer
 * It applies the react-syntax-highlighter to do syntax highlighting on
 * markdown rendered codeblocks
 */
export const CodeBlockRenderer = ({ language, value }) => (
  <SyntaxHighlighter style={tomorrow} language={language}>
    {value}
  </SyntaxHighlighter>
);
