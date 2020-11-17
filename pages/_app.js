import React from "react";
import App from "next/app";
import Head from "next/head";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Cabin"
            rel="stylesheet"
            key="google-font-cabin"
          />
        </Head>

        <Component {...pageProps} />

        <style global jsx>{`
          body {
            font-family: "Cabin", sans-serif;
            background-color: #4ecdc4;
            overflow: hidden;
          }

          * {
            outline: none;
            border: none;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
        `}</style>
      </>
    );
  }
}
