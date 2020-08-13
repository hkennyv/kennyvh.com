import matter from "gray-matter";

import Layout from "../components/Layout";
import SocialLinks from "../components/SocialLinks";
import PostList from "../components/PostList";

const Index = ({ title, description, handle, socialLinks, ...props }) => {
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
        {/* can make more content accessible by scrolling down here! :) */}
      </main>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
      handle: configData.default.handle,
      socialLinks: configData.default.socialLinks,
    },
  };
}
