import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";

export default ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>SmoothCSS</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};