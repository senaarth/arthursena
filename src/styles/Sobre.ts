import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 600px;

  margin-top: 5rem;
  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    color: white;
    margin-bottom: 1rem;
  }

  .typed {
    margin: 0.5rem 0 2rem;
    font-size: 1.125rem;
    line-height: 1.125rem;
    height: 1.125rem;
    color: white;
  }

  .desc {
    margin-top: 2rem;

    font-size: 0.875rem;
    line-height: 1.125rem;
    width: 100%;
    max-width: 600px;
    text-align: left;
    color: #b1b1b1;

    strong {
      color: white;
    }

    a {
      color: white;
      text-decoration: underline;
      transition: color 0.4s;
      font-weight: 600;

      &:hover {
        color: #8153e2;
      }
    }

    & + .desc {
      margin-top: 0.75rem;
    }
  }
`;

export const Avatar = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  .avatar {
    width: 40%;
    max-width: 13rem;
    max-height: 15rem;
    border-radius: 8px;
    object-fit: cover;
    aspect-ratio: 1;
    border: 3px solid #242424;
  }

  div {
    flex: 1;
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
      color: white;
      margin-top: 0;
      font-size: 2rem;
      line-height: 2rem;
      font-weight: 500;
    }

    h2 {
      margin-top: 0.25rem;
      color: white;
      font-size: 1.125rem;
      line-height: 1.6875rem;
      font-weight: 400;
    }

    span {
      margin-bottom: 0 !important;
      margin-top: 0.5rem;
    }

    .social-media {
      margin: 1rem 0 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      width: 100%;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;

        width: 1.5rem;
        height: 1.5rem;

        border: 0;
        border-radius: 6px;
        outline: none;
        cursor: pointer;

        transition: filter 0.3s;

        img {
          width: 100%;
        }

        &:hover {
          filter: brightness(0.5);
        }

        & + a {
          margin-left: 0.65rem;
        }
      }
    }
  }
`;

export const ToolsContainer = styled.div`
  width: 100%;
  max-width: 500px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
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

export const Work = styled.div`
  width: 100%;
  padding: 2rem 0;
  margin: 2rem 0;
  border: 1px solid #242424;
  border-width: 1px 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    margin-bottom: 1.5rem;
  }

  div + div {
    margin-top: 1.5rem;
  }

  div {
    display: grid;
    grid-template-columns: 1fr;

    * {
      width: 100%;
    }

    h4 {
      font-size: 1rem;
      color: white;
    }

    a {
      transition: color 0.4s;

      &:hover {
        color: #8153e2;
      }
    }

    a,
    p {
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: #6c6c6c;
    }
  }
`;
