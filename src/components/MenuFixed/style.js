import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  top: 50%;
  left: 0;
  height: 100vh;


  div {
    transform: rotate(90deg);
    cursor: pointer;
    background: #0d316b;
    padding: 1rem 2rem;
    border-radius: 4px;
    color: #fff;

    header {
      font-size: 2rem;
      text-transform: uppercase;
    }
  }

  ul {
    transform: translateX(-100%);
    opacity: 0;
    visibility: hidden;
    background: red;
    height: 20rem;
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);

    &.active {
      transform: translateX(0);
      opacity: 1;
      visibility: visible;
    }
  }
`;
