import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  z-index: 99;

  display: flex;
  justify-content: center;
  align-self: center;
  border-bottom: 1px solid #242424;
  background-color: rgba(17, 17, 17, 1);

  position: fixed;

  @media (min-width: 720px) {
    background-color: rgba(17, 17, 17, 0.8);
    -webkit-backdrop-filter: blur(24px);
    backdrop-filter: blur(24px);
  }
`;

export const ContentContainer = styled.header`
  width: 90%;
  max-width: 1120px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  a,
  button {
    transition: filter 0.6s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  .logo {
    width: 20%;
    max-width: 3rem;

    img {
      width: 100%;
      object-fit: contain;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;

  transform: translateX(1.25rem);

  button {
    height: 2.375rem;
    display: flex;
    align-items: center;

    color: #b1b1b1;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: capitalize;

    padding: 0 1.25rem;
    border-radius: 6px;

    transition: all 0.3s;

    outline: none;
    border: 0;
    background-color: transparent;
    cursor: pointer;

    &:hover,
    &.active {
      filter: brightness(1);
      color: #f6f6f6;
      background-color: #2e2e2e;
    }

    &.active {
      cursor: default;
    }
  }

  button + button {
    margin-left: 0.5rem;
  }

  @media (max-width: 720px) {
    position: absolute;
    top: 5rem;
    right: -100%;
    width: 70%;
    max-width: 360px;

    flex-direction: column;

    background-color: rgba(17, 17, 17, 1);
    /* -webkit-backdrop-filter: blur(24px); */
    /* backdrop-filter: blur(24px); */
    border-bottom: 1px solid #242424;
    border-left: 1px solid #242424;

    padding: 1rem 0;

    button + button {
      margin-left: 0;
      margin-top: 0.5rem;
    }

    transition: right 0.6s;

    &.visible {
      right: 0;
    }
  }
`;

export const Hamburger = styled.button`
  width: 2.5rem;
  height: 2.25rem;
  padding: 0.5rem;

  background-color: transparent;
  border: 0;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  span {
    width: 100%;
    height: 2px;
    background-color: #b1b1b1;

    span + span {
      margin-top: 0.5rem;
    }

    &.bar1 {
      transition: transform 0.6s;
    }

    &.bar2 {
      transition: opacity 0.6s;
    }

    &.bar3 {
      transition: transform 0.6s;
    }
  }

  transition: background-color 0.3s !important;

  &:hover {
    filter: brightness(1) !important;
    cursor: pointer;
  }

  &.close {
    span.bar1 {
      transform: rotate(-45deg) translate(-6px, 7px);
    }
    span.bar2 {
      opacity: 0;
    }
    span.bar3 {
      transform: rotate(45deg) translate(-5px, -7px);
    }
  }

  @media (min-width: 720px) {
    display: none;
  }
`;
