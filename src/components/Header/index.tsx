import React from "react";

import { NavLink } from "../NavLink";

import { Container, ContentContainer, Navigation } from "./styles";

export function Header() {
  return (
    <Container>
      <ContentContainer>
        <a href="/" className="logo">
          <img src="/images/logo.png" alt="Logo Arthur Sena" />
        </a>
        <Navigation>
          <NavLink href="/" label="HOME" />
          <NavLink href="/projetos" label="PROJETOS" />
          <NavLink href="/contato" label="CONTATO" />
          <NavLink href="/sobre" label="SOBRE" />
        </Navigation>
      </ContentContainer>
    </Container>
  );
}
