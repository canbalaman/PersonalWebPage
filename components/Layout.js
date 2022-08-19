import React from "react";
import Head from "next/head";
import Typical from 'react-typical'
import Header from "../components/Header";
import react from "react";


const Layout = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>Can Balaman {title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content="Portfolio" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="canblmn" data-description="Support me on Buy me a coffee!" data-message="Thank You" data-color="#BD5FFF" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
      </Head>

      <div className="relative z-10 px-3 overflow-hidden min-h-screen bg-primary-light antialiased font-montserrat dark:bg-primary-dark dark:text-white">
        <div className="w-full h-full">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;