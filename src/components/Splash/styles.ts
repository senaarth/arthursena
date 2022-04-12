import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  background-color: #111;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: opacity 1s;

  &,
  * {
    font-size: 2rem;
    color: #b1b1b1;
    margin: 0;

    @media (min-width: 768px) {
      font-size: 3.5rem;
    }
  }

  &.d-none {
    display: none;
  }

  span.zoom {
    -webkit-animation: zoom 0.6s forwards;
    animation: zoom 0.6s forwards;
  }

  span.rotate {
    -webkit-animation: rotate 0.6s forwards;
    animation: rotate 0.6s forwards;
  }

  @keyframes rotate {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @keyframes zoom {
    from {
      transform: scale(1);
    }

    to {
      transform: scale(4);
    }
  }
`;
