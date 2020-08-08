import Head from "next/head";
import Header from "./Header";

import BLM from "./BLM";

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <title>{pageTitle}</title>
      </Head>
      <BLM />
      <div className="main">
        <Header />
        {children}
      </div>
    </>
  );
}
