import React from "react";
import Head from "next/head";
import { PrismicRichText } from "@prismicio/react";
import { Tooltip } from "@mui/material";

import { createClient } from "../../prismicio";

import { Page } from "../styles/global";
import { Hero, Projects } from "../styles/Home";
import { ProjectCard } from "../components/ProjectCard";
import Contato from "../components/Contato";

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

type Project = {
  slug: string;
  name: string;
  link: string;
  description: [];
  banner: string;
  place: number;
};
interface HomeProps {
  content: Content;
  projects: Project[];
}

/**
 * Home Page
 * @return {JSX.Element}
 */

export default function Home({ content, projects }: HomeProps): JSX.Element {
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
            <button
              type="button"
              onClick={() => {
                const contato = document.querySelector("#contato");

                contato.scrollIntoView({ behavior: "smooth" });
              }}
              className="filled"
            >
              Entrar em contato
            </button>
            <button
              type="button"
              onClick={() => {
                const projetos = document.querySelector("#projetos");

                projetos.scrollIntoView({ behavior: "smooth" });
              }}
              className="outlined"
            >
              Meus Projetos
            </button>
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
      <span id="projetos" style={{ height: "7rem", marginTop: "-5rem" }} />
      <Projects>
        <h1>Meus Projetos</h1>
        {projects.map((item, index) => {
          return <ProjectCard key={item.slug} {...item} isLast={index === 2} />;
        })}
      </Projects>
      <span id="contato" style={{ height: "7rem", marginTop: "-5rem" }} />
      <Contato />
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

  const projectsRes = await client.getAllByType("project");

  const projects = projectsRes.map(({ uid, data: projectsData }) => {
    return {
      slug: uid,
      name: projectsData.name,
      link: projectsData.link,
      description: projectsData.description,
      banner: projectsData.banner.url,
      place: projectsData.place,
    };
  });

  projects.sort((a, b) => a.place - b.place);
  projects.splice(-1, projects.length - 3);

  return {
    props: { content, projects },
  };
}
