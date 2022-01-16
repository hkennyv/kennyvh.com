import Link from "next/link";
import { parseMarkdownFiles } from "@utils/utils";

import Layout from "@components/Layout";
import PostList from "@components/PostList";

export default function Index({ config, posts }) {
  const mostRecentPosts = posts.slice(0, 3);

  return (
    <Layout pageTitle={config.title} config={config}>
      <div className="index-content framed">
        <h1 id="hello-there">Howdy! 👋</h1>
        <p>
          My name is <code>Kenny Huynh</code>, I'm a norcal native now living in
          sunny southern california.
        </p>
        <p>
          I'm currently a <code>Systems Development Engineer (SysDE)</code> @{" "}
          <a href="https://smile.amazon.com/">Amazon</a> working on developer
          infrastructure that supports both internal and external teams.
        </p>
        <div>
          Feel free to:
          <ul>
            <li>
              <Link href="/about">learn more about me</Link>
            </li>
            <li>
              <Link href="/posts">read some of my technical blog posts</Link>
            </li>
            <li>
              <Link href="/contact">contact me or connect on socials</Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const config = (await import(`../siteconfig.json`)).default;

  // collect all of the markdown files in /content and transform them using
  // gray-matter to parse the YAML header and the markdown body
  //
  // NOTE: when using webpack 5, you _must_ match on the `./` at the beginning
  // of the filename, otherwise webpack will output duplicate filepaths
  //
  // see: https://github.com/webpack/webpack/issues/12087
  let ctx = require.context("../content/posts", true, /\.\/.*\.md$/);

  // posts are in descending order by date
  const posts = parseMarkdownFiles(ctx);

  return {
    props: {
      config,
      posts,
    },
  };
}
