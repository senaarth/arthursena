import React from "react";

import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <div>
        <div className="logo">
          <img src="/images/logo.png" alt="Logo Arthur Sena" />
          <p>
            Feito por
            <br />
            Arthur Sena <br />
            Eng. de Software
          </p>
        </div>
        <div className="social-media">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/senaarth/"
          >
            <img src="/images/github.png" alt="Logo GitHub" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://linkedin.com/in/senaarth/"
          >
            <img src="/images/linkedin.png" alt="Logo Linkedin" />
          </a>
        </div>
      </div>
    </Container>
  );
}
