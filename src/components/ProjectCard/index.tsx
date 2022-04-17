/* eslint-disable react/require-default-props */
import React from "react";
import { PrismicRichText } from "@prismicio/react";

import { Card, Container } from "./styles";

interface CardProps {
  slug: string;
  name: string;
  call: [];
  banner: string;
  isLast?: boolean;
}

export function ProjectCard({
  slug,
  name,
  call,
  banner,
  isLast = false,
}: CardProps) {
  return (
    <Container>
      <Card href={`/projetos/${slug}`}>
        <img
          src={banner}
          alt={`Banner do projeto ${name}`}
          className="banner"
        />
        <div>
          <h1 className="title">{name}</h1>
          <PrismicRichText field={call} />
          <a href={`/projetos/${slug}`} className="saiba-mais">
            saiba mais
          </a>
          {!isLast && <span className="background" />}
        </div>
      </Card>
      {isLast && (
        <span className="list-call">
          <a href="/projetos">ver lista completa</a>
        </span>
      )}
    </Container>
  );
}
