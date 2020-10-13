import Link from "next/link";
import Frontmatter from "@components/Frontmatter";

export default function PostList({ posts }) {
  return (
    <div className="posts">
      {posts.map((post, idx) => (
        <div key={idx} className="post on-list">
          <Frontmatter key={idx} post={post} root={"/posts"} />
          <div>
            <Link href={`/posts/${post.slug}`}>
              <a className="read-more button">Read more →</a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
