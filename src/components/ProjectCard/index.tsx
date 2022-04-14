import React from "react";
import { PrismicRichText } from "@prismicio/react";

import { Container } from "./styles";

interface CardProps {
  name: string;
  link: string;
  description: [];
  banner: string;
}

export function ProjectCard({ name, link, description, banner }: CardProps) {
  return (
    <Container>
      <img src={banner} alt={`Banner do projeto ${name}`} className="banner" />
      <div>
        <h1>{name}</h1>
        <PrismicRichText field={description} />
        <a href={link} className="link" target="_blank" rel="noreferrer">
          visitar
          <img
            src="https://daleanthony.com/assets/img/icons/icon-external-link.svg"
            alt=""
          />
        </a>
      </div>
    </Container>
  );
}
