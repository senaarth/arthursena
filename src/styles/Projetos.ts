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
  padding: 3rem 0;

  > h1 {
    font-weight: 600;
    color: white;
    font-size: 2.5rem;
    line-height: 2.75rem;
  }

  > h2 {
    font-size: 1.5rem;
    color: #b1b1b1;
    font-weight: 500;
    margin-bottom: 3rem;
    text-align: center;
  }

  div + div {
    margin-top: 1.5rem;
  }
`;
