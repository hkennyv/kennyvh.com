import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CodeBlock = ({ language, value }) => (
  <SyntaxHighlighter style={tomorrow} language={language}>
    {value}
  </SyntaxHighlighter>
);

export default CodeBlock;
