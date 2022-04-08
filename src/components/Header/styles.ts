import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 5rem;

  display: flex;
  justify-content: center;
  align-self: center;

  background-color: rgba(17, 17, 17, 0.8);
  -webkit-backdrop-filter: blur(24px);
  backdrop-filter: blur(24px);
  border-bottom: 1px solid #242424;

  position: fixed;
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
    font-size: 0.95rem;
    letter-spacing: 2px;
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
`;
