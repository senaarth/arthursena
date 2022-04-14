import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Exo', sans-serif;
  }

  html, body, #__next {
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #111;
  }

  a {
    color: #b1b1b1;
    text-decoration: none;
  }

  .grayscale {
    filter: grayscale(1);
  }

  .Mui-valid::after {
    height: 22px;
    width: 101%;
    content: "";
    background-color: #111;
  }
`;

export const Page = styled.div`
  width: 100%;
  margin-top: 5rem;
  padding: 2rem 0;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h1 {
    font-weight: 600;
    color: white;
  }

  .mail-call {
    margin-bottom: 2.75rem;
    color: #b1b1b1;
    font-size: 0.85rem;
    opacity: 0.8;

    span {
      font-weight: 500;
      color: #f6f6f6;
      text-decoration: underline;
      transition: filter 0.4s;
      cursor: pointer;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;
