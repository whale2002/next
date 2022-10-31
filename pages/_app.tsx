import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import Head from "next/head";
import { Layout, ILayoutProps } from "@/components/Layout";
import { ThemeContextProvider } from '@/stores/theme'
import { UserAgentProvider } from "@/stores/userAgent";
import { getLayoutData } from '@/network'
import { getIsMobile } from "@/utils";
import "../styles/global.scss";

interface IDeviceProps {
  isMobile: boolean
  sSupportWebp: boolean
}

const MyApp = (data: AppProps & ILayoutProps & IDeviceProps ) => {
  const { Component, pageProps, navbarData, footerData, isMobile } = data;

  return (
    <div>
      <Head>
        <title>Nextjs Demo</title>
        <meta
          name="description"
          content={`A Demo for SSR 官网(${
            isMobile ? "移动端" : "PC端"
          })`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeContextProvider>
        <UserAgentProvider>
          <Layout navbarData={navbarData} footerData={footerData}>
            <Component {...pageProps} />
          </Layout>
        </UserAgentProvider>
      </ThemeContextProvider>
      
    </div>
  );
};

MyApp.getInitialProps = async (context: AppContext) => {
  const pageProps = await App.getInitialProps(context);
  const { data } = await getLayoutData()

  console.log(getIsMobile(context))

  return {
    ...pageProps,
    ...data,
    isMobile: getIsMobile(context)
  };
};

export default MyApp;
