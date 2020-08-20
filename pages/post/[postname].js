import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import Layout from "../../components/Layout";

import { CodeBlockRenderer, HeadingRenderer } from "../../utils/renderers";
import { formatFrontmatterDate } from "../../utils/helpers";

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
  if (!frontmatter) return <></>;

  const { date, tags, title } = frontmatter;
  const dt = new Date(date);
  const dtString = formatFrontmatterDate(dt);

  return (
    <Layout pageTitle={`${siteTitle} | ${title}`}>
      <main>
        <div className="page-container">
          <header className="post-header">
            <h1 className="post-title">{title}</h1>
            {frontmatter.date && (
              <time className="post-date" dateTime={dt}>
                {dtString}
              </time>
            )}
          </header>
          <article className="post-content">
            <div className="markdown-body">
              <ReactMarkdown
                escapeHtml={false}
                source={markdownBody}
                renderers={{
                  code: CodeBlockRenderer,
                  heading: HeadingRenderer,
                }}
              />
            </div>
          </article>
          <footer></footer>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params;

  const content = await import(`../../content/posts/${postname}.md`);
  const config = await import(`../../siteconfig.json`);
  const data = matter(content.default);

  // matter returns date strings as momentjs date objects, need to convert to
  // string otherwise next complains
  if (data.data.date instanceof Date)
    data.data.date = data.data.date.toLocaleString();

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);

      return slug;
    });
    return data;
  })(require.context("../../content/posts", true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/post/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
