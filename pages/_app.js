import React from "react";
import App, { Container } from "next/app";
import MainLayout from "../components/layouts/MainLayout";
import CanvasContextProvider from "../components/includes/CanvasContext";
import "../styles/main.scss";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <CanvasContextProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </CanvasContextProvider>
    );
  }
}

export default MyApp;
