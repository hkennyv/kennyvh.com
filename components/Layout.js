import Head from "next/head";
import Header from "./Header";

import BLM from "./BLM";

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <meta property="og:title" content="Kenny Huynh" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kennyvh.com/" />
        <meta
          property="og:description"
          content="Welcome to my little corner of the internet!"
        />
        <meta
          property="og:image"
          content="https://pbs.twimg.com/profile_banners/603264551/1431934867/1500x500"
        />

        <title>{pageTitle}</title>
      </Head>
      <div className="main">
        <Header />
        {children}
      </div>
    </>
  );
}
