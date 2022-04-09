import React from "react";
import { AppProps } from "next/app";

import { Header } from "../components/Header";
import { Splash } from "../components/Splash";

import GlobalStyle from "../styles/global";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Splash />
      <GlobalStyle />
    </>
  );
};

export default MyApp;
