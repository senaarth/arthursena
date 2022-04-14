import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 3.5fr;

  border: 1px solid #2e2e2e;
  border-radius: 16px;

  width: 100%;
  max-width: 700px;
  min-height: 8rem;

  .banner {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px 0 0 16px;
  }

  div {
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    padding: 1.5rem;

    h1 {
      font-size: 1.5rem;
      color: white;

      @media (max-width: 520px) {
        font-size: 1rem;
      }
    }

    p {
      font-size: 0.75rem;
      line-height: 1.15rem;
      color: #b1b1b1;

      @media (max-width: 520px) {
        display: none;
      }
    }

    .link {
      font-size: 1rem;
      color: rgb(108, 108, 108);
      display: flex;
      margin-top: 0.5rem;

      transition: filter 0.4s;

      &:hover {
        filter: brightness(1.5);
      }

      img {
        width: 0.75rem;
        margin-left: 0.5rem;
      }
    }
  }
`;
