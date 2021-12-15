import React from "react";
import Head from "next/head";

import { Page } from "../styles/global";

/**
 * Home Page
 * @return {JSX.Element}
 */

export default function Home(): JSX.Element {
  return (
    <Page>
      <Head>
        <title>Home | Arthur Sena</title>
      </Head>
      <h1>
        SITE DO <a href="https://linkedin.com/in/senaarth">SENAARTH</a>
      </h1>
    </Page>
  );
}
