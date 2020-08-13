import Link from "next/link";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

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
            const [month, day, year] = dt.toLocaleDateString().split("/");

            console.log(date);

            return (
              <li className="post" key={post.slug}>
                <time className="postdate" dateTime={dt}>
                  {`${monthNames[month]}, ${day} ${year}`}
                </time>
                <h2 className="posttitle">
                  <Link href={{ pathname: `/post/${slug}` }}>
                    <a className="postlink">{title}</a>
                  </Link>
                </h2>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li className="posttag" key={tag}>{`#${tag}`}</li>
                  ))}
                </ul>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
