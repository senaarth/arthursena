import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 600px;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  h1 {
    font-size: 1.25rem;
    font-weight: 600;
    color: white;
    margin: 1.5rem 0 0;
  }

  .back {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding-bottom: 1.25rem;

    button {
      background-color: transparent;
      width: 25%;
      max-width: 2rem;
      border: 0;
      outline: none;
      opacity: 0.5;

      cursor: pointer;

      transition: opacity 0.3s;

      img {
        width: 100%;
      }

      &:hover {
        opacity: 1;
      }
    }
  }

  .title {
    margin-bottom: 1.25rem;
    font-size: 2.5rem;
    color: white;
    display: flex;

    transition: filter 0.3s;
    position: relative;
    cursor: pointer;

    &::after {
      width: 0;
      transition: width 0.3s;
      height: 1px;
      background-color: white;
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(calc(-50% - 0.75rem));
      bottom: 2px;
    }

    &:hover {
      filter: brightness(0.7);

      &::after {
        width: calc(100% - 1.75rem);
      }
    }

    img {
      width: 1.25rem;
      margin-left: 0.5rem;
      object-fit: contain;
    }

    @media (max-width: 520px) {
      font-size: 2rem;
    }
  }

  > .desc {
    margin-bottom: 0.5rem;

    color: white;
    opacity: 0.8;

    a {
      color: white;
      transition: color 0.3s;
      text-decoration: underline;

      &:hover {
        color: #8153e2;
      }
    }
  }

  .banner {
    width: 100%;

    border-radius: 8px;
    border: 1px solid #242424;
    margin-top: 1.5rem;
  }
`;

export const ToolsContainer = styled.div`
  width: 100%;
  margin: 0 0 2rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  transform: translate(-0.5rem);

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;
    margin-top: 0.5rem;

    width: 20%;
    max-width: 3rem;
    aspect-ratio: 1;
    padding: 0.4rem;

    border-radius: 6px;
    border: 1.5px solid rgba(255, 255, 255, 0.05);

    img {
      width: 100%;
      object-fit: contain;
      aspect-ratio: 1;
      border-radius: 6px;
      filter: grayscale(1);
      transition: filter 0.6s;
    }

    &:hover {
      img {
        filter: none !important;
      }
    }
  }
`;
