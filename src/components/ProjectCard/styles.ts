import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 700px;
  min-height: 9rem;
  position: relative;

  display: flex;

  &:hover {
    .background {
      width: 100%;
      border-radius: 0 16px 16px 0;
    }

    .saiba-mais {
      filter: brightness(1.5);

      &::after {
        width: 100%;
      }
    }
  }

  .list-call {
    position: absolute;
    background: linear-gradient(180deg, transparent, #111, #111, #111);
    width: calc(100% + 2px);
    height: 100%;
    bottom: -1px;
    left: -1px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
      font-size: 1.25rem;
      color: #b1b1b1;
      margin-top: 3rem;

      transition: filter 0.3s;

      cursor: pointer;

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
    }
  }
`;

export const Card = styled.a`
  display: grid;
  grid-template-columns: 2fr 3fr;

  border: 1px solid #2e2e2e;
  border-radius: 16px;

  width: 100%;
  max-width: 700px;
  height: 100%;

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

    border-radius: 0 16px 16px 0;

    .background {
      height: 100%;
      width: 0;

      transition: all 0.3s;

      position: absolute;
      left: 0;
      top: 0;

      background: rgba(255, 255, 255, 0.05);
      z-index: 0;
    }

    .title {
      font-size: 1.5rem;
      color: white;
      display: flex;

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

      @media (min-width: 520px) {
        margin-top: 1rem;
        margin-left: auto;
      }
    }
  }
`;
