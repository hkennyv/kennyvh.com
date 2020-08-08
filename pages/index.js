import matter from "gray-matter";

import Layout from "../components/Layout";
import SocialLinks from "../components/SocialLinks";
import PostList from "../components/PostList";

const Index = ({ title, description, handle, socialLinks, posts, ...props }) => {
  return (
    <Layout pageTitle={title}>
      <main>
        <div className="splash-container">
          <div className="splash">
            <h1>
              {title}
              <span className="fancy">.</span>
            </h1>
            <span className="handle">{handle}</span>
            <h2>{description}</h2>
            <SocialLinks socialLinks={socialLinks} />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      const document = matter(value.default);

      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../content/posts", true, /\.md$/));

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
      handle: configData.default.handle,
      socialLinks: configData.default.socialLinks,
    },
  };
}
