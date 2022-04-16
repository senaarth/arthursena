import styled from "styled-components";

export const Hero = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 1024px) {
    grid-template-columns: 5fr 3fr;
  }

  width: 90%;
  max-width: 1120px;

  .info {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    > * + * {
      margin-top: 1rem;
    }

    h2 {
      font-size: 2rem;
      line-height: 2rem;
      color: #b1b1b1;
      font-weight: 400;
    }

    h1 {
      font-size: 3.5rem;
      line-height: 3.5rem;
      font-weight: 500;
      letter-spacing: 2px;
      color: white;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
      color: #b1b1b1;
    }

    div {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      margin-top: 2rem;

      @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
      }

      * {
        width: 100%;
        height: 50px;
        border-radius: 6px;
        background-color: white;
        line-height: 50px;
        text-align: center;
        color: #b1b1b1;
        transition: filter 0.3s;
        cursor: pointer;
        border: 0;
        outline: none;
        text-transform: lowercase;
        font-weight: 500;
        font-size: 1rem;

        &:hover {
          filter: brightness(1.5);
        }

        &.outlined {
          border: 1.25px solid #b1b1b1;
          background-color: transparent;
        }

        &.filled {
          background-color: white;
          color: #111;

          &:hover {
            filter: brightness(0.8);
          }
        }

        &.link {
          border: 0;
          background-color: transparent;
          width: 5.15rem;
          margin: auto;
          border: 1px solid transparent;

          transition: all 0.4s;

          &:hover {
            background-color: #242424;
            border: 1px solid #242424;
            width: 100%;
            filter: brightness(1);
          }
        }
      }
    }
  }

  .avatar {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: 600px;
    margin: auto;

    img {
      width: 100%;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      /* margin-top: 1.5rem; */

      width: 100%;

      > * + * {
        margin-left: 0.375rem;
      }

      a {
        width: 20%;
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

    @media (max-width: 1024px) {
      > img {
        display: none;
      }
    }
  }
`;

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 90%;
  max-width: 1120px;

  padding: 3rem 0;

  border-top: 1px solid #242424;
  border-bottom: 1px solid #242424;

  > h1 {
    font-size: 2rem;
    line-height: 2rem;
    font-weight: 500;
    letter-spacing: 1.5px;
    color: white;
  }

  > * + * {
    margin-top: 1.5rem;
  }
`;
