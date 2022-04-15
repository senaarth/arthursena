import React from "react";
import { PrismicRichText } from "@prismicio/react";

import { Container } from "./styles";

interface CardProps {
  slug: string;
  name: string;
  link: string;
  description: [];
  banner: string;
}

export function ProjectCard({
  slug,
  name,
  link,
  description,
  banner,
}: CardProps) {
  return (
    <Container>
      <img src={banner} alt={`Banner do projeto ${name}`} className="banner" />
      <div>
        <a href={link} target="_blank" rel="noreferrer" className="title">
          {name}
          <img
            src="/images/up-right-arrow.png"
            alt="Seta apontando para a direito e para cimaa"
          />
        </a>
        <PrismicRichText field={description} />
        <a href={`/projetos/${slug}`} className="saiba-mais">
          saiba mais
        </a>
      </div>
    </Container>
  );
}
