import "../styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import { Layout, ILayoutProps } from "@/components/Layout";
import Head from "next/head";
import { LOCALDOMAIN } from '@/utils'
import axios from "axios";

const MyApp = (data: AppProps & ILayoutProps) => {
  const { Component, pageProps, navbarData, footerData } = data;

  return (
    <div>
      <Head>
        <title>Nextjs Demo</title>
        <meta
          name="description"
          content="A Demo for 《深入浅出SSR官网开发指南》"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout navbarData={navbarData} footerData={footerData}>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

MyApp.getInitialProps = async (context: AppContext) => {
  const pageProps = await App.getInitialProps(context);
  const { data } = await axios.get(`${LOCALDOMAIN}/api/layout`)

  return {
    ...pageProps,
    ...data
  };
};

export default MyApp;
