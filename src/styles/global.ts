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
`;

export const Page = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
