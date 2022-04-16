import React from "react";
import { AppProps } from "next/app";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../../prismicio";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Splash } from "../components/Splash";

import GlobalStyle from "../styles/global";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <Splash />
        <GlobalStyle />
      </PrismicPreview>
    </PrismicProvider>
  );
};

export default MyApp;
