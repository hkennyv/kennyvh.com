import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";
import { CodeBlockRenderer, HeadingRenderer } from "../utils/renderers";

const About = ({ title, frontmatter, markdownBody, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`}>
        <main>
          <div className="page-container">
            <ReactMarkdown
              escapeHtml={false}
              source={markdownBody}
              renderers={{
                code: CodeBlockRenderer,
                heading: HeadingRenderer,
              }}
            />
          </div>
        </main>
      </Layout>
    </>
  );
};

export default About;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);
  const aboutPage = await import(`../content/pages/about.md`);
  const data = matter(aboutPage.default);

  // matter returns date strings as momentjs date objects, need to convert to
  // string otherwise next complains
  if (data.data.date instanceof Date)
    data.data.date = data.data.date.toLocaleString();

  return {
    props: {
      title: configData.default.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}
