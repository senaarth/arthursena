import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  max-width: 600px;

  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin-bottom: 0.75rem;

  * {
    width: 100% !important;
  }

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`;
