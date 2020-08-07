const config = {
  siteTitle: "Kenny Huynh", // Site title.
  siteTitleShort: "khuynh", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "khuynh - Kenny Huynh", // Alternative site title for SEO.
  siteLogo: "/logos/dl-khuynh.jpg", // Logo used for SEO and manifest.
  siteUrl: "https://epic-lamport-ce50c0.netlify.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "kenny huynh's personal site/blog.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  // siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  // googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  postsPerPage: 4, // Amount of posts displayed per listing page.
  userName: "khuynh", // Username to display in the author segment.
  userEmail: "me@kennyvh.com", // Email used for RSS feed's author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "CA", // User location to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/hkennyv/khuynh-gatsby-theme",
      iconClassName: "fa fa-github",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/hkennyv/",
      iconClassName: "fab fa-linkedin",
    },
    {
      label: "Email",
      url: "mailto:me@kennyvh.com",
      iconClassName: "fab fa-envelope",
    },
    {
      label: "Stack Overflow",
      url: "https://stackoverflow.com/users/8539533/khuynh",
      iconClassName: "fab fa-stack-overflow",
    },
    {
      label: "Twitter",
      url: "https://twitter.com/hkennyv",
      iconClassName: "fab fa-twitter",
    },
  ],
  menuLinks: [
    {
      name: "About",
      link: "/me",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ],
  copyright: "Copyright © 2020. khuynh", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
