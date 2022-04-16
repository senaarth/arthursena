import React from "react";

import { NavLink } from "../NavLink";

import { Container, ContentContainer, Hamburger, Navigation } from "./styles";

export function Header() {
  const [menuOpen, setMenu] = React.useState(false);

  return (
    <Container>
      <ContentContainer>
        <a href="/" className="logo">
          <img src="/images/logo.png" alt="Logo Arthur Sena" />
        </a>
        <Navigation className={menuOpen ? "visible" : ""}>
          <NavLink onClick={() => setMenu(false)} href="/" label="Home" />
          <NavLink
            onClick={() => setMenu(false)}
            href="/projetos"
            label="Projetos"
          />
          <NavLink onClick={() => setMenu(false)} href="/sobre" label="Sobre" />
        </Navigation>
        <Hamburger
          className={menuOpen ? "close" : ""}
          onClick={() => setMenu(!menuOpen)}
        >
          <span className="bar1" />
          <span className="bar2" />
          <span className="bar3" />
        </Hamburger>
      </ContentContainer>
    </Container>
  );
}
