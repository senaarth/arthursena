/* eslint-disable camelcase */
import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Tooltip from "@mui/material/Tooltip";

import { PrismicRichText } from "@prismicio/react";
import { createClient } from "../../../../prismicio";

import { Page } from "../../../styles/global";
import { Container, ToolsContainer } from "../../../styles/Projeto";

type Tool = {
  tool_name: string;
  tool_icon: string;
};

type Project = {
  slug: string;
  name: string;
  link: string;
  description: [];
  banner: string;
  place: number;
  tools: Tool[];
};

interface ProjectProps {
  project: Project;
}

export default function Projeto({ project }: ProjectProps) {
  const router = useRouter();

  return (
    <Page>
      <Head>
        <title>{`${project.name || "Projeto"} | Arthur Sena`}</title>
      </Head>
      <Container>
        <div className="back">
          <button type="button" onClick={() => router.back()}>
            <img src="/images/left-arrow.png" alt="Seta para esquerda" />
          </button>
        </div>
        <a
          className="title"
          href={project.link}
          target="_blank"
          rel="noreferrer"
        >
          {project.name}
          <img
            src="/images/up-right-arrow.png"
            alt="Seta apontando para a direito e para cimaa"
          />
        </a>
        <PrismicRichText
          field={project.description}
          components={{
            paragraph: ({ children }) => <p className="desc">{children}</p>,
          }}
        />
        <h1>Tecnologias Utilizadas</h1>
        <ToolsContainer>
          {project.tools?.map((item) => {
            return (
              <Tooltip title={item?.tool_name} key={item?.tool_name}>
                <div>
                  <img src={item?.tool_icon} alt={item?.tool_name} />
                </div>
              </Tooltip>
            );
          })}
        </ToolsContainer>
        <img
          src={project?.banner}
          alt={`Banner ${project.name}`}
          className="banner"
        />
      </Container>
    </Page>
  );
}

export async function getServerSideProps({ previewData, params }) {
  const client = createClient({ previewData });

  const { slug } = params;
  const { data: project } = await client.getByUID("project", slug, {
    ref: null,
  });

  return {
    props: {
      project: {
        ...project,
        banner: project.banner.url,
        tools: project.tools.map((item) => {
          return {
            ...item,
            tool_icon: item.tool_icon.url,
          };
        }),
      },
    },
  };
}
