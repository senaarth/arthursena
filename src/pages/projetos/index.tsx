import React from "react";
import Head from "next/head";

import { createClient } from "../../../prismicio";

import { Container } from "../../styles/Projetos";
import { ProjectCard } from "../../components/ProjectCard";

type Project = {
  slug: string;
  name: string;
  link: string;
  call: [];
  banner: string;
  place: number;
};

interface HomeProps {
  projects: Project[];
}

/**
 * Projetos Page
 * @return {JSX.Element}
 */

export default function Home({ projects }: HomeProps): JSX.Element {
  return (
    <Container>
      <Head>
        <title>Projetos | Arthur Sena</title>
      </Head>
      <h1>PROJETOS</h1>
      <h2 className="subtitle">Conheça um pouco do meu trabalho</h2>
      {projects.map((item) => {
        return <ProjectCard key={item.slug} {...item} />;
      })}
    </Container>
  );
}

export async function getServerSideProps({ previewData }) {
  const client = createClient({ previewData });

  const res = await client.getAllByType("project");

  const projects = res.map(({ uid, data }) => {
    return {
      slug: uid,
      name: data.name,
      link: data.link,
      call: data.call,
      banner: data.banner.url,
      place: data.place,
    };
  });

  projects.sort((a, b) => a.place - b.place);

  return {
    props: { projects },
  };
}
