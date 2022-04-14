import React from "react";
import Head from "next/head";
import { PrismicRichText } from "@prismicio/react";
import { Tooltip } from "@mui/material";

import { createClient } from "../../prismicio";

import { Page } from "../styles/global";
import { Hero } from "../styles/Home";

type SocialItem = {
  name: string;
  icon: string;
  url: string;
};

type Content = {
  avatar: string;
  title: string;
  subtitle: string;
  description: [];
  social: SocialItem[];
};

interface HomeProps {
  content: Content;
}

/**
 * Home Page
 * @return {JSX.Element}
 */

export default function Home({ content }: HomeProps): JSX.Element {
  return (
    <Page>
      <Head>
        <title>Home | Arthur Sena</title>
      </Head>
      <Hero>
        <div className="info">
          <h2>{content?.subtitle}</h2>
          <h1>{content?.title}</h1>
          <PrismicRichText field={content?.description} />
          <div>
            <a href="/contato" className="filled">
              Entrar em contato
            </a>
            <a href="/projetos" className="outlined">
              Meus Projetos
            </a>
            <a href="/sobre" className="link">
              Sobre mim
            </a>
          </div>
        </div>
        <div className="avatar">
          <img src={content?.avatar} alt="Arthur Sena" />
          <div>
            {content?.social?.map((item) => {
              return (
                <Tooltip title={item.name} key={item.name}>
                  <a target="_blank" rel="noreferrer" href={item.url}>
                    <img src={item.icon} alt={`Logo ${item.name}`} />
                  </a>
                </Tooltip>
              );
            })}
          </div>
        </div>
      </Hero>
    </Page>
  );
}

export async function getServerSideProps({ previewData }) {
  const client = createClient({ previewData });

  const { data } = await client.getSingle("home");

  const content = {
    ...data,
    avatar: data?.avatar?.url,
    social: data?.social?.map((item) => {
      return {
        ...item,
        icon: item?.icon?.url,
      };
    }),
  };

  return {
    props: { content },
  };
}
