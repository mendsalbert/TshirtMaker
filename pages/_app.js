import React from "react";
import App, { Container } from "next/app";
import MainLayout from "../components/layouts/MainLayout";
import CanvasContextProvider from "../components/includes/CanvasContext";
import "../styles/main.scss";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
class MyApp extends App {
   static async getInitialProps({ Component, ctx }) {
      let pageProps = {};
      if (Component.getInitialProps) {
         pageProps = await Component.getInitialProps(ctx);
      }
      return { pageProps };
   }

   render() {
      const { Component, pageProps, reduxStore } = this.props;
      return (
         <CanvasContextProvider>
            <Provider store={reduxStore}>
               <MainLayout>
                  <Component {...pageProps} />
               </MainLayout>
            </Provider>
         </CanvasContextProvider>
      );
   }
}

export default withReduxStore(MyApp);
