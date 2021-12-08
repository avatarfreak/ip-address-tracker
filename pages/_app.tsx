import Head from "next/head";
import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../src/components/styles/index.scss";
import { Layout } from "@components/layout/layout";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="ip Address Tracker challeges accepted by avatarfreak"
        />
        <title>Frontend Mentor | IP Address Tracker </title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
