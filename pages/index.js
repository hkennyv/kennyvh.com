import Link from "next/link";
import { parseMarkdownFiles } from "@utils/utils";

import Layout from "@components/Layout";
import PostList from "@components/PostList";

export default function Index({ config, posts }) {
  return (
    <Layout pageTitle={config.name} config={config}>
      <div className="index-content framed">
        <h1 id="hello-there">Hello there! 👋</h1>
        <p>
          My name is <code>Kenny Huynh</code>, I'm a norcal native now living in
          sunny southern california️.
        </p>
        <p>
          I'm also a DevOps Engineer (& former embedded systems engineer) @{" "}
          <a href="https://www.rejouleenergy.com">ReJoule, Inc.</a>{" "}
        </p>
        <p>
          I love technology so you can often find me hacking away on{" "}
          <a href="https://github.com/hkennyv">various projects and things</a>.
          I also love going for a ride on my bicycle or motorcycle and I'm a
          (very) new aspiring bedroom DJ.
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
  let ctx = require.context("../content/posts", true, /\.md$/);
  const posts = parseMarkdownFiles(ctx);

  return {
    props: {
      config,
      posts,
    },
  };
}
