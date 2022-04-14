import React from "react";
import Head from "next/head";
import Typed from "typed.js";
import { PrismicRichText } from "@prismicio/react";
import Tooltip from "@mui/material/Tooltip";

import { createClient } from "../../prismicio";

import { Avatar, Container, ToolsContainer, Work } from "../styles/Sobre";

/**
 * Sobre Page
 * @return {JSX.Element}
 */

type WorkExperience = {
  job: string;
  date: string;
  link: string;
  company: string;
};

type Tool = {
  name: string;
  icon: string;
};

type Content = {
  avatar: string;
  title: string;
  description: [];
  typed: string[];
  tools: Tool[];
  work: WorkExperience[];
};

interface SobreProps {
  content: Content;
}

export default function Sobre({ content }: SobreProps): JSX.Element {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el?.current, {
      strings: content.typed || [],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 120,
      loop: true,
      showCursor: false,
    });

    // eslint-disable-next-line consistent-return
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Container>
      <Head>
        <title>Sobre | Arthur Sena</title>
      </Head>
      <Avatar>
        <img
          src={content?.avatar}
          alt="Foto de Arthur Sena"
          className="avatar"
        />
        <div>
          <h1>Arthur Sena</h1>
          <h2>{content?.title}</h2>
          <span ref={el} className="typed" />
          <div className="social-media">
            <a
              href="https://github.com/senaarth"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/github.png" alt="Logo Github" />
            </a>
            <a
              href="https://linkedin.com/in/senaarth"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/linkedin.png" alt="Logo Linkedin" />
            </a>
          </div>
        </div>
      </Avatar>
      <PrismicRichText
        field={content?.description}
        components={{
          paragraph: ({ children }) => <p className="desc">{children}</p>,
        }}
      />
      <Work>
        <h3>Experiência Profissional</h3>
        {content?.work?.map((item) => {
          return (
            <div key={item.date}>
              <h4>{item?.job}</h4>
              <a href={item?.link} target="_blank" rel="noreferrer">
                {item?.company}
              </a>
              <p>{item?.date}</p>
            </div>
          );
        })}
      </Work>
      <h3>Principais Ferramentas</h3>
      <ToolsContainer>
        {content.tools?.map((item) => {
          return (
            <Tooltip title={item?.name} key={item?.name}>
              <div>
                <img src={item?.icon} alt={item?.name} />
              </div>
            </Tooltip>
          );
        })}
      </ToolsContainer>
    </Container>
  );
}

export async function getServerSideProps({ previewData }) {
  const client = createClient({ previewData });

  const { data } = await client.getSingle("about");

  const content = {
    avatar: data?.avatar?.url,
    description: data?.description,
    title: data?.title,
    typed: data?.tools_typed?.map((item) => item?.tool),
    tools: data?.tools?.map((item) => {
      return {
        ...item,
        icon: item?.icon.url,
      };
    }),
    work: data?.work?.map((item) => {
      return {
        ...item,
        link: item?.link.url,
      };
    }),
  };

  return {
    props: { content },
  };
}
