import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";
import PostList from "../components/PostList";

const Blog = ({ title, posts, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | Blog`}>
        <main>
          <div className="page-container">
            <h2>Posts</h2>
            <PostList posts={posts} />
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      const document = matter(value.default);

      // matter returns date strings as momentjs date objects, need to convert to
      // string otherwise next complains
      if (document.data.date instanceof Date)
        document.data.date = document.data.date.toLocaleString();

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
      title: configData.default.title,
      posts,
    },
  };
}
