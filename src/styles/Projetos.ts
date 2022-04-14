import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 1120px;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 5rem;
  padding: 2rem 0;

  > h1 {
    font-weight: 600;
    color: white;
    font-size: 2em;
  }

  > h2 {
    font-size: 1rem;
    color: #b1b1b1;
    font-weight: 300;
    margin-bottom: 2rem;
    text-align: center;
  }

  div + div {
    margin-top: 1.5rem;
  }
`;
