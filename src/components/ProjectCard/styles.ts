import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 3.5fr;

  border: 1px solid #2e2e2e;
  border-radius: 16px;

  width: 100%;
  max-width: 700px;
  min-height: 9rem;

  .banner {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px 0 0 16px;
  }

  > div {
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    padding: 1.5rem;

    .title {
      font-size: 1.5rem;
      color: white;
      display: flex;

      transition: filter 0.3s;
      position: relative;

      &::after {
        width: 0;
        transition: width 0.3s;
        height: 1px;
        background-color: white;
        content: "";
        position: absolute;
        left: 0;
        bottom: 2px;
      }

      &:hover {
        filter: brightness(0.7);

        &::after {
          width: calc(100% - 1.25rem);
        }
      }

      img {
        width: 0.75rem;
        margin-left: 0.5rem;
        object-fit: contain;
      }

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

    .saiba-mais {
      font-size: 0.85rem;
      color: #b1b1b1;
      margin-top: 0.5rem;

      transition: filter 0.3s;

      &::after {
        width: 0;
        transition: width 0.3s;
        height: 1px;
        background-color: white;
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 2px;
      }

      &:hover {
        filter: brightness(1.5);

        &::after {
          width: 100%;
        }
      }

      @media (min-width: 520px) {
        margin-top: 1rem;
        margin-left: auto;
      }
    }
  }
`;
