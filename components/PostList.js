import Link from "next/link";
import { formatFrontmatterDate } from "../utils/helpers";

export default function PostList({ posts }) {
  return (
    <div>
      {!posts && <div>No posts!</div>}
      <ul className="postlist">
        {posts &&
          posts.map((post) => {
            const { slug } = post;
            const { date, tags, title } = post.frontmatter;
            const dt = new Date(date);
            const dtString = formatFrontmatterDate(dt);

            return (
              <li className="postlist-post" key={post.slug}>
                <time className="postlist-date" dateTime={dt}>
                  {dtString}
                </time>
                <h2 className="postlist-title">
                  <Link href={{ pathname: `/post/${slug}` }}>
                    <a className="postlist-link">{title}</a>
                  </Link>
                </h2>
                <ul className="postlist-taglist">
                  {tags.map((tag) => (
                    <li className="postlist-tag" key={tag}>{`#${tag}`}</li>
                  ))}
                </ul>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
