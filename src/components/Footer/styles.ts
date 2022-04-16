import styled from "styled-components";

export const Container = styled.div`
  min-height: 5rem;
  width: 100%;

  border-top: 1px solid #242424;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    max-width: 1.5rem;
  }

  > div {
    width: 90%;
    max-width: 1120px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .logo {
      display: flex;
      flex-direction: row;
      align-items: center;

      img {
        max-width: 2rem;
      }

      p {
        margin-left: 0.8rem;
        color: white;

        font-size: 0.65rem;
      }
    }

    .social-media {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-left: auto;

      > * + * {
        margin-left: 0.375rem;
      }

      a {
        max-width: 2.75rem;
        padding: 0.5rem;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 100%;
        }

        transition: background-color 0.3s;

        &:hover {
          background-color: #2e2e2e;
        }
      }
    }
  }
`;
